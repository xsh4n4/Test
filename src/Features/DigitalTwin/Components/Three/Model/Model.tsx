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

	const [opacity, setOpacity] = useState(isNew ? 1 : 1);
	const [shouldRender, setShouldRender] = useState(!isNew);
	const [hasFadedOut, setHasFadedOut] = useState(false);
	const { currentPosition, currentScale, updateTransforms } =
		useModelTransforms(position, scale);

	const [pointerDownTime, setPointerDownTime] = useState(0);

	const handlePointerDown = () => {
		setPointerDownTime(Date.now());
	};

	const handlePointerUp = (event: ThreeEvent<PointerEvent>) => {
		const clickDuration = Date.now() - pointerDownTime;
		const wasDragged = event.movementX !== 0 || event.movementY !== 0;

		if (!wasDragged && clickDuration < 200) {
			const clickedMesh = event.object;
			if (clickedMesh.userData.clickable) {
				handleChestClick(event);
			}
		}
	};

	const handleChestClick = (event: ThreeEvent<MouseEvent>) => {
		event.stopPropagation();
		if (modelType === "body") {
			const cardioConfig: {
				position: [number, number, number];
				zoom: number;
			} = {
				position: [0, 20, 200] as [number, number, number],
				zoom: 15,
			};
			onModelChange?.("cardio", cardioConfig);
		}
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

	useEffect(() => {
		if (isNew && !shouldRender && startFadeIn) {
			setShouldRender(true);
		}
	}, [isNew, shouldRender, startFadeIn]);

	useEffect(() => {
		if (!currentModel) return;

		currentModel.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				if (modelType === "body" && child.name === "UV_LP.002") {
					child.raycast = new THREE.Mesh().raycast;
					child.userData.clickable = true;
				}

				const material =
					modelType === "cardio"
						? createCardioMaterial(child.name, cardioTextures)
						: createBodyMaterial(bodyTextures);

				child.material = material;
				if (child.material) {
					child.material.transparent = true;
					child.material.blending = THREE.CustomBlending;
					child.material.blendSrc = THREE.SrcAlphaFactor;
					child.material.blendDst = THREE.OneMinusSrcAlphaFactor;
					child.material.blendEquation = THREE.AddEquation;

					// Ensure body model always has full opacity unless fading
					if (modelType === "body") {
						child.material.opacity = isFading ? opacity : 1;
					} else {
						child.material.opacity = isHidden ? 0 : opacity;
					}

					child.material.depthWrite = true;
					child.material.needsUpdate = true;
					child.material.visible =
						(!isHidden || modelType === "cardio") && shouldRender;
				}
			}
		});
	}, [
		currentModel,
		modelType,
		cardioTextures,
		bodyTextures,
		opacity,
		isHidden,
		shouldRender,
		isFading,
	]);

	if (
		(!shouldRender || (isFading && opacity <= 0) || isHidden) &&
		modelType !== "cardio"
	)
		return null;

	return (
		<group
			ref={modelRef}
			onPointerDown={handlePointerDown}
			onPointerUp={handlePointerUp}
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
				intensity={3.0}
				castShadow
				color='#CFD8EA'
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
			/>
			{/* Add a constant key light */}
			<directionalLight
				position={[0, 10, 10]}
				intensity={1.0}
				color='#FFFFFF'
			/>
		</group>
	);
}

export default Model;
