import { Clone } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

interface ModelProps {
	position?: [number, number, number];
	rotation?: [number, number, number];
	scale?: [number, number, number];
	color?: string;
	modelType?: "body" | "cardio";
}

function Model({
	position = [0, 0, 0],
	rotation = [0, 0, 0],
	scale = [1, 1, 1],
	color = "#f0f0f0",
	modelType = "body",
}: ModelProps) {
	const bodyModel = useLoader(OBJLoader, "/assets/models/normal/normal.obj");
	const cardioModel = useLoader(OBJLoader, "/assets/models/cardio/cardio.obj");

	// Load cardio textures
	const arteriesDiffuse = useLoader(
		THREE.TextureLoader,
		"/assets/models/cardio/Arteries_Diffuse.png",
	);
	const arteriesNormal = useLoader(
		THREE.TextureLoader,
		"/assets/models/cardio/Arteries_Normal.png",
	);
	const heartDiffuse = useLoader(
		THREE.TextureLoader,
		"/assets/models/cardio/HeartAnatomy_Diffuse.png",
	);
	const heartNormal = useLoader(
		THREE.TextureLoader,
		"/assets/models/cardio/HeartAnatomy_Normal.png",
	);
	const heartHeight = useLoader(
		THREE.TextureLoader,
		"/assets/models/cardio/HeartAnatomy_Height.png",
	);
	const veinsDiffuse = useLoader(
		THREE.TextureLoader,
		"/assets/models/cardio/Veins_Diffuse.png",
	);
	const veinsNormal = useLoader(
		THREE.TextureLoader,
		"/assets/models/cardio/Veins_Normal.png",
	);

	// Load normal model textures
	const baseColor = useLoader(
		THREE.TextureLoader,
		"/assets/models/normal/DefaultMaterial_BaseColor.png",
	);
	const metallic = useLoader(
		THREE.TextureLoader,
		"/assets/models/normal/DefaultMaterial_Metallic.png",
	);
	const normalDire = useLoader(
		THREE.TextureLoader,
		"/assets/models/normal/DefaultMaterial_Normal_Dire.png",
	);
	const normal = useLoader(
		THREE.TextureLoader,
		"/assets/models/normal/DefaultMaterial_Normal.png",
	);
	const roughness = useLoader(
		THREE.TextureLoader,
		"/assets/models/normal/DefaultMaterial_Roughness.png",
	);

	const currentModel = modelType === "body" ? bodyModel : cardioModel;

	const [currentPosition, setCurrentPosition] =
		useState<[number, number, number]>(position);
	const [currentScale, setCurrentScale] =
		useState<[number, number, number]>(scale);

	const modelRef = useRef<THREE.Group>(null);

	useEffect(() => {
		if (currentModel && modelType === "cardio") {
			currentModel.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					const name = child.name.toLowerCase();

					if (
						name.includes("arteries") ||
						name.includes("aorta") ||
						name.includes("aortic")
					) {
						child.material = new THREE.MeshStandardMaterial({
							map: arteriesDiffuse,
							normalMap: arteriesNormal,
							roughness: 0.5,
							metalness: 0.1,
							side: THREE.DoubleSide,
						});
					} else if (
						name.includes("heart") ||
						name.includes("valve") ||
						name.includes("back_heart") ||
						name.includes("Capslice") ||
						name.includes("mitral") ||
						name.includes("tricuspic")
					) {
						child.material = new THREE.MeshStandardMaterial({
							map: heartDiffuse,
							normalMap: heartNormal,
							displacementMap: heartHeight,
							displacementScale: 0.1,
							roughness: 0.5,
							metalness: 0.1,
							side: THREE.DoubleSide,
						});
					} else if (
						name.includes("vein") ||
						name.includes("vena") ||
						name.includes("Pulmoneryartery") ||
						name.includes("Pulmonary_vein") ||
						name.includes("pulmonary")
					) {
						child.material = new THREE.MeshStandardMaterial({
							map: veinsDiffuse,
							normalMap: veinsNormal,
							roughness: 0.5,
							metalness: 0.1,
							side: THREE.DoubleSide,
						});
					} else {
						child.material = new THREE.MeshStandardMaterial({
							map: heartDiffuse,
							normalMap: heartNormal,
							displacementMap: heartHeight,
							displacementScale: 0.5,
							roughness: 0.5,
							metalness: 0.1,
							side: THREE.DoubleSide,
						});
					}
				}
			});
		} else if (currentModel && modelType === "body") {
			currentModel.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					child.material = new THREE.MeshStandardMaterial({
						map: baseColor,
						normalMap: normal,
						normalMapType: THREE.TangentSpaceNormalMap,
						metalnessMap: metallic,
						roughnessMap: roughness,
						roughness: 0.7,
						metalness: 0.25,
						side: THREE.DoubleSide,
					});

					if (child.material.normalScale) {
						child.material.normalScale.set(1, 1);
					}
				}
			});
		}
	}, [
		currentModel,
		color,
		modelType,
		arteriesDiffuse,
		arteriesNormal,
		heartDiffuse,
		heartNormal,
		heartHeight,
		veinsDiffuse,
		veinsNormal,
		baseColor,
		metallic,
		normalDire,
		normal,
		roughness,
	]);

	useFrame(() => {
		if (modelRef.current) {
			setCurrentPosition((prev) => {
				return [
					prev[0] + (position[0] - prev[0]) * 0.1,
					prev[1] + (position[1] - prev[1]) * 0.1,
					prev[2] + (position[2] - prev[2]) * 0.1,
				];
			});

			setCurrentScale((prev) => {
				return [
					prev[0] + (scale[0] - prev[0]) * 0.1,
					prev[1] + (scale[1] - prev[1]) * 0.1,
					prev[2] + (scale[2] - prev[2]) * 0.1,
				];
			});
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
				color='#CFD8EA' //
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
			/>
		</group>
	);
}

export default Model;
