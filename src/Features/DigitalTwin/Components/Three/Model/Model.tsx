import { Clone } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { ModelProps } from "./Types/modelTypes";
import { useCardioTextures, useBodyTextures } from "./Hooks/useModelTextures";
import {
	createCardioMaterial,
	createBodyMaterial,
} from "./Utils/materialUtils";
import { useModelTransitions } from "./Hooks/useModelTransitions";
import { useModelTransforms } from "./Hooks/useModelTransforms";

// Lighting setup moved directly into Model component
const ModelLighting = (): JSX.Element => (
	<>
		<ambientLight intensity={0.8} />
		<directionalLight
			position={[2, 10, 5]}
			intensity={5.0}
			castShadow
			color='#CFD8EA'
			shadow-mapSize-width={2048}
			shadow-mapSize-height={2048}
		/>
	</>
);

function Model({
	position = [0, 0, 0],
	rotation = [0, 0, 0],
	scale = [1, 1, 1],
	modelType = "body",
}: ModelProps) {
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

	const { opacity, setOpacity, targetOpacity } = useModelTransitions();
	const { currentPosition, currentScale, updateTransforms } =
		useModelTransforms(position, scale);
	const modelRef = useRef<THREE.Group>(null);

	useFrame(() => {
		setOpacity((current) => {
			const diff = targetOpacity - current;
			return Math.abs(diff) < 0.03 ? targetOpacity : current + diff * 0.015;
		});

		if (modelRef.current) {
			updateTransforms(position, scale);
		}
	});

	useEffect(() => {
		if (!currentModel) return;

		currentModel.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				if (modelType === "cardio") {
					child.material = createCardioMaterial(child.name, cardioTextures);
				} else {
					child.material = createBodyMaterial(bodyTextures);
					if (child.material.normalScale) {
						child.material.normalScale.set(1, 1);
					}
				}
				child.material.transparent = true;
				child.material.opacity = opacity;
			}
		});
	}, [currentModel, modelType, cardioTextures, bodyTextures, opacity]);

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
			<ModelLighting />
		</group>
	);
}

export default Model;
