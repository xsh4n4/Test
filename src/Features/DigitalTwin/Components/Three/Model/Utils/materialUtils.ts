// src/Features/DigitalTwin/Utils/materialUtils.ts
import * as THREE from "three";
import { ModelTextures, BodyModelTextures } from "../Types/modelTypes";

export const createCardioMaterial = (
	meshName: string,
	textures: ModelTextures,
): THREE.Material => {
	const name = meshName.toLowerCase();

	if (
		name.includes("arteries") ||
		name.includes("aorta") ||
		name.includes("aortic")
	) {
		return new THREE.MeshStandardMaterial({
			// map: textures.arteries.diffuse,
			normalMap: textures.arteries.normal,
			color: new THREE.Color(1, 1, 1), //
			roughness: 0.5,
			metalness: 0.1,
			side: THREE.DoubleSide,
		});
	}

	if (
		name.includes("heart") ||
		name.includes("valve") ||
		name.includes("back_heart") ||
		name.includes("Capslice") ||
		name.includes("mitral") ||
		name.includes("tricuspic")
	) {
		return new THREE.MeshStandardMaterial({
			// map: textures.heart.diffuse,
			normalMap: textures.heart.normal,
			displacementMap: textures.heart.height,
			color: new THREE.Color(1, 1, 1), //
			displacementScale: 0.1,
			roughness: 0.5,
			metalness: 0.1,
			side: THREE.DoubleSide,
		});
	}

	if (
		name.includes("vein") ||
		name.includes("vena") ||
		name.includes("Pulmoneryartery") ||
		name.includes("Pulmonary_vein") ||
		name.includes("pulmonary")
	) {
		return new THREE.MeshStandardMaterial({
			// map: textures.veins.diffuse,
			normalMap: textures.veins.normal,
			color: new THREE.Color(1, 1, 1), //
			roughness: 0.5,
			metalness: 0.1,
			side: THREE.DoubleSide,
		});
	}

	return new THREE.MeshStandardMaterial({
		// map: textures.heart.diffuse,
		normalMap: textures.heart.normal,
		displacementMap: textures.heart.height,
		color: new THREE.Color(1, 1, 1), //
		displacementScale: 0.5,
		roughness: 0.5,
		metalness: 0.1,
		side: THREE.DoubleSide,
	});
};

export const createBodyMaterial = (
	textures: BodyModelTextures,
): THREE.Material => {
	return new THREE.MeshStandardMaterial({
		map: textures.baseColor,
		normalMap: textures.normal,
		metalnessMap: textures.metallic,
		roughnessMap: textures.roughness,
		roughness: 0.7,
		metalness: 0.25,
		side: THREE.DoubleSide,
	});
};
