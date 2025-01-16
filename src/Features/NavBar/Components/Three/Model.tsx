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
}

function Model({
	position = [0, 0, 0],
	rotation = [0, 0, 0],
	scale = [1, 1, 1],
	color = "#f0f0f0",
}: ModelProps) {
	const obj = useLoader(OBJLoader, "/assets/models/body.obj");
	const [currentPosition, setCurrentPosition] =
		useState<[number, number, number]>(position);
	const [currentScale, setCurrentScale] =
		useState<[number, number, number]>(scale);

	const modelRef = useRef<THREE.Group>(null);
	const materialRef = useRef<THREE.MeshStandardMaterial>(null);

	useEffect(() => {
		if (obj) {
			obj.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					child.material = new THREE.MeshStandardMaterial({
						color: new THREE.Color(color),
						roughness: 0.5,
						metalness: 0.1,
						side: THREE.DoubleSide,
					});
				}
			});
		}
	}, [obj, color]);

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
				object={obj}
				position={currentPosition}
				rotation={rotation}
				scale={currentScale}
				castShadow
				receiveShadow
			>
				<meshStandardMaterial
					ref={materialRef}
					color={color}
					roughness={0.5}
					metalness={0.1}
					side={THREE.DoubleSide}
				/>
			</Clone>

			<ambientLight intensity={0.5} />
			<directionalLight
				position={[10, 10, 5]}
				intensity={1}
				castShadow
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
			/>
		</group>
	);
}

export default Model;
