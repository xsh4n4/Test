import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { ModelTextures, BodyModelTextures } from "../Types/modelTypes";

export const useCardioTextures = (): ModelTextures => {
	const arteriesDiffuse = useLoader(
		THREE.TextureLoader,
		"/src/assets/models/cardio/Arteries_Diffuse.png",
	);
	const arteriesNormal = useLoader(
		THREE.TextureLoader,
		"/src/assets/models/cardio/Arteries_Normal.png",
	);
	const heartDiffuse = useLoader(
		THREE.TextureLoader,
		"/src/assets/models/cardio/HeartAnatomy_Diffuse.png",
	);
	const heartNormal = useLoader(
		THREE.TextureLoader,
		"/src/assets/models/cardio/HeartAnatomy_Normal.png",
	);
	const heartHeight = useLoader(
		THREE.TextureLoader,
		"/src/assets/models/cardio/HeartAnatomy_Height.png",
	);
	const veinsDiffuse = useLoader(
		THREE.TextureLoader,
		"/src/assets/models/cardio/Veins_Diffuse.png",
	);
	const veinsNormal = useLoader(
		THREE.TextureLoader,
		"/src/assets/models/cardio/Veins_Normal.png",
	);

	return {
		arteries: { diffuse: arteriesDiffuse, normal: arteriesNormal },
		heart: { diffuse: heartDiffuse, normal: heartNormal, height: heartHeight },
		veins: { diffuse: veinsDiffuse, normal: veinsNormal },
	};
};

export const useBodyTextures = (): BodyModelTextures => {
	return {
		baseColor: useLoader(
			THREE.TextureLoader,
			"/src/assets/models/normal/DefaultMaterial_BaseColor.png",
		),
		metallic: useLoader(
			THREE.TextureLoader,
			"/src/assets/models/normal/DefaultMaterial_Metallic.png",
		),
		normalDire: useLoader(
			THREE.TextureLoader,
			"/src/assets/models/normal/DefaultMaterial_Normal_Dire.png",
		),
		normal: useLoader(
			THREE.TextureLoader,
			"/src/assets/models/normal/DefaultMaterial_Normal.png",
		),
		roughness: useLoader(
			THREE.TextureLoader,
			"/src/assets/models/normal/DefaultMaterial_Roughness.png",
		),
	};
};
