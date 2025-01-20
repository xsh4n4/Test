
import { Clone } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { ModelProps } from "./Types/modelTypes";
import { useCardioTextures, useBodyTextures } from "./Hooks/useModelTextures";
import {
	createCardioMaterial,
	createBodyMaterial,
} from "./Utils/materialUtils";

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
	const [currentPosition, setCurrentPosition] =
		useState<[number, number, number]>(position);
	const [currentScale, setCurrentScale] =
		useState<[number, number, number]>(scale);
	const modelRef = useRef<THREE.Group>(null);

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
			}
		});
	}, [currentModel, modelType, cardioTextures, bodyTextures]);

	useFrame(() => {
		if (modelRef.current) {
			setCurrentPosition((prev) => [
				prev[0] + (position[0] - prev[0]) * 0.1,
				prev[1] + (position[1] - prev[1]) * 0.1,
				prev[2] + (position[2] - prev[2]) * 0.1,
			]);

			setCurrentScale((prev) => [
				prev[0] + (scale[0] - prev[0]) * 0.1,
				prev[1] + (scale[1] - prev[1]) * 0.1,
				prev[2] + (scale[2] - prev[2]) * 0.1,
			]);
		}
	});

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
