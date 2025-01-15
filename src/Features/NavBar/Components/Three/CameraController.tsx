import { useFrame, useThree } from "@react-three/fiber";
import { useCamera } from "./CameraContext";
import { Vector3 } from "three";

const CameraController = () => {
	const { camera } = useThree();
	const { cameraState } = useCamera();

	useFrame(() => {
		const targetPosition = new Vector3(...cameraState.targetPosition);

		// Smoothly interpolate camera position
		camera.position.lerp(targetPosition, 0.05);

		// Smoothly interpolate zoom
		camera.zoom += (cameraState.targetZoom - camera.zoom) * 0.05;
		camera.updateProjectionMatrix();
	});

	return null;
};

export default CameraController;
