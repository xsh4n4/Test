import { Clone } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
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
}: ExtendedModelProps) {
	const bodyModel = useLoader(
		OBJLoader,
		"/src/assets/models/normal/normal.obj",
	);
	const cardioModel = useLoader(
		OBJLoader,
		"/src/assets/models/cardio/cardio.obj",
	);

	const cardioTextures = useCardioTextures();
	const bodyTextures = useBodyTextures();

	const currentModel = modelType === "body" ? bodyModel : cardioModel;
	const modelRef = useRef<THREE.Group>(null);

	const [opacity, setOpacity] = useState(isNew ? 0 : 1);
	const [shouldRender, setShouldRender] = useState(!isNew);
	const { currentPosition, currentScale, updateTransforms } =
		useModelTransforms(position, scale);

	useFrame(() => {
		if (isHidden) {
			setOpacity(0);
			return;
		}

		updateTransforms(position, scale);

		if (isFading) {
			const newOpacity = Math.max(0, opacity - 0.06);
			setOpacity(newOpacity);

			if (newOpacity === 0) {
				setShouldRender(false);
				if (onTransitionComplete) {
					onTransitionComplete();
				}
			}
		} else if (isNew) {
			if (shouldRender) {
				const newOpacity = Math.min(1, opacity + 0.06);
				setOpacity(newOpacity);
			}
		}
	});

	useEffect(() => {
		if (isNew && !shouldRender) {
			const timeout = setTimeout(() => {
				setShouldRender(true);
			}, 500);
			return () => clearTimeout(timeout);
		}
	}, [isNew, shouldRender]);

	useEffect(() => {
		if (!currentModel) return;

		currentModel.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				const material =
					modelType === "cardio"
						? createCardioMaterial(child.name, cardioTextures)
						: createBodyMaterial(bodyTextures);

				child.material = material;
				if (child.material) {
					child.material.transparent = true;
					child.material.opacity = isHidden ? 0 : opacity;
					child.material.depthWrite = opacity > 0.5;
					child.material.blending = THREE.NormalBlending;
					child.material.visible = !isHidden && shouldRender;
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
	]);

	if (!shouldRender || (isFading && opacity <= 0) || isHidden) return null;

	return (
		<group ref={modelRef}>
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
