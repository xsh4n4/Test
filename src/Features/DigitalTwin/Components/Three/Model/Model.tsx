import { Clone } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { ThreeEvent } from "@react-three/fiber";
import { ModelProps } from "./Types/modelTypes";
import { useCardioTextures, useBodyTextures } from "./Hooks/useModelTextures";
import {
	createCardioMaterial,
	createBodyMaterial,
} from "./Utils/materialUtils";
import { useModelTransforms } from "./Hooks/useModelTransforms";

interface ExtendedModelProps extends ModelProps {
	isFading?: boolean;
	isNew?: boolean;
	onTransitionComplete?: () => void;
	isHidden?: boolean;
	startFadeIn?: boolean;
	onModelChange?: (
		type: "body" | "cardio",
		cameraConfig: {
			position: [number, number, number];
			zoom: number;
		},
	) => void;
}

function Model({
	position = [0, 0, 0],
	rotation = [0, 0, 0],
	scale = [1, 1, 1],
	modelType = "body",
	isFading = false,
	isNew = false,
	onTransitionComplete,
	isHidden = false,
	startFadeIn = true,
	onModelChange,
}: ExtendedModelProps) {
	const bodyModel = useLoader(OBJLoader, "/assets/models/normal/normal.obj");
	const cardioModel = useLoader(OBJLoader, "/assets/models/cardio/cardio.obj");

	const cardioTextures = useCardioTextures();
	const bodyTextures = useBodyTextures();

	const currentModel = modelType === "body" ? bodyModel : cardioModel;
	const modelRef = useRef<THREE.Group>(null);

	const [opacity, setOpacity] = useState(isNew ? 0 : 1);
	const [shouldRender, setShouldRender] = useState(!isNew);
	const [hasFadedOut, setHasFadedOut] = useState(false);
	const { currentPosition, currentScale, updateTransforms } =
		useModelTransforms(position, scale);

	const [mouseDownTime, setMouseDownTime] = useState<number>(0);
	const [mouseDownPosition, setMouseDownPosition] = useState<{
		x: number;
		y: number;
	} | null>(null);

	const handleMouseDown = (event: ThreeEvent<MouseEvent>) => {
		setMouseDownTime(Date.now());
		setMouseDownPosition({ x: event.clientX, y: event.clientY });
	};

	const handleMouseUp = (event: ThreeEvent<MouseEvent>) => {
		if (!mouseDownPosition) return;

		const mouseUpTime = Date.now();
		const timeDiff = mouseUpTime - mouseDownTime;
		const distanceX = Math.abs(event.clientX - mouseDownPosition.x);
		const distanceY = Math.abs(event.clientY - mouseDownPosition.y);
		const totalDistance = Math.sqrt(
			distanceX * distanceX + distanceY * distanceY,
		);

		if (timeDiff < 200 && totalDistance < 5) {
			if (modelType === "body" && event.object.userData.clickable) {
				const cardioConfig: {
					position: [number, number, number];
					zoom: number;
				} = {
					position: [0, 20, 200] as [number, number, number],
					zoom: 15,
				};
				onModelChange?.("cardio", cardioConfig);
			}
		}

		// Reset the state
		setMouseDownTime(0);
		setMouseDownPosition(null);
	};

	useFrame(() => {
		if (isHidden && modelType !== "cardio") {
			setOpacity(0);
			return;
		}

		updateTransforms(position, scale);

		if (isFading && !hasFadedOut) {
			const fadeSpeed = 0.15;
			const newOpacity = Math.max(0, opacity - fadeSpeed);
			setOpacity(newOpacity);

			if (newOpacity === 0) {
				setHasFadedOut(true);
				setShouldRender(false);
				if (onTransitionComplete) {
					onTransitionComplete();
				}
			}
		} else if (isNew && startFadeIn && (!isFading || hasFadedOut)) {
			if (shouldRender) {
				const fadeSpeed = 0.15;
				const targetOpacity = 1;
				const newOpacity = Math.min(targetOpacity, opacity + fadeSpeed);
				setOpacity(newOpacity);
			}
		}
	});

	useFrame(() => {
		if (isFading && !hasFadedOut) {
			const fadeSpeed = 0.01; // Slower fade for smoother transition
			setOpacity((prevOpacity) => Math.max(0, prevOpacity - fadeSpeed));
			if (opacity === 0) {
				setHasFadedOut(true);
				setShouldRender(false);
				onTransitionComplete?.();
			}
		} else if (isNew && startFadeIn && (!isFading || hasFadedOut)) {
			if (shouldRender) {
				const fadeInSpeed = 0.01;
				setOpacity((prevOpacity) => Math.min(1, prevOpacity + fadeInSpeed));
			}
		}
	});

	useEffect(() => {
		if (isNew && !shouldRender && startFadeIn) {
			setShouldRender(true);
		}
	}, [isNew, shouldRender, startFadeIn]);

	useEffect(() => {
		if (!currentModel) return;

		const materials = new Map<string, THREE.Material>();

		currentModel.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				if (modelType === "body" && child.name === "UV_LP.002") {
					child.raycast = new THREE.Mesh().raycast;
					child.userData.clickable = true;
				}

				// Create material if it doesn't exist for this mesh
				if (!materials.has(child.name)) {
					const material =
						modelType === "cardio"
							? createCardioMaterial(child.name, cardioTextures)
							: createBodyMaterial(bodyTextures);
					materials.set(child.name, material);
				}

				// Get the material from our cache
				const material = materials.get(child.name) as THREE.Material;
				child.material = material;

				// Update opacity while preserving other properties
				if (material instanceof THREE.MeshStandardMaterial) {
					material.transparent = true;

					if (modelType === "body") {
						material.opacity = isHidden ? 0 : opacity;
						// Maintain consistent color regardless of transition state
						material.color.setRGB(0.75, 0.75, 0.75); // Matching the darker color from createBodyMaterial

						// Adjust metalness and roughness for better visual quality
						material.metalness = 0.25;
						material.roughness = 0.7;
						material.envMapIntensity = 1.5;
					} else if (modelType === "cardio") {
						material.opacity = Math.max(0.01, isHidden ? 0 : opacity);
					}

					material.depthWrite = opacity > 0.01;
					material.needsUpdate = true;
				}
			}
		});

		return () => {
			materials.forEach((material) => {
				if (material instanceof THREE.Material) {
					material.dispose();
				}
			});
		};
	}, [
		currentModel,
		modelType,
		cardioTextures,
		bodyTextures,
		opacity,
		isHidden,
		shouldRender,
		isFading,
		isNew,
	]);
	if (
		(!shouldRender || (isFading && opacity <= 0) || isHidden) &&
		modelType !== "cardio"
	)
		return null;

	return (
		<group
			ref={modelRef}
			onPointerDown={handleMouseDown}
			onPointerUp={handleMouseUp}
		>
			<Clone
				object={currentModel}
				position={currentPosition}
				rotation={rotation}
				scale={currentScale}
				castShadow
				receiveShadow
			/>
			<ambientLight intensity={0.8} />
			<directionalLight
				position={[2, 10, 5]}
				intensity={5.0}
				castShadow
				color='#CFD8EA'
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
			/>
		</group>
	);
}

export default Model;
