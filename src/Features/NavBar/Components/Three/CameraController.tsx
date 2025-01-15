import { useFrame, useThree } from "@react-three/fiber";
import { useCamera } from "./CameraContext";
import { Vector3 } from "three";
import { useRef, useEffect } from "react";

const CameraController = () => {
	const { camera } = useThree();
	const { cameraState } = useCamera();
	const rotationRef = useRef<number>(0);
	const isDraggingRef = useRef<boolean>(false);
	const previousMouseXRef = useRef<number>(0);

	const MAX_ROTATION = Math.PI / 4;

	useEffect(() => {
		const handleMouseDown = (e: MouseEvent) => {
			isDraggingRef.current = true;
			previousMouseXRef.current = e.clientX;
		};

		const handleMouseUp = () => {
			isDraggingRef.current = false;
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!isDraggingRef.current) return;

			const deltaX = e.clientX - previousMouseXRef.current;

			const newRotation = rotationRef.current - deltaX * 0.01;

			rotationRef.current = Math.max(
				-MAX_ROTATION,
				Math.min(MAX_ROTATION, newRotation),
			);
			previousMouseXRef.current = e.clientX;
		};

		const handleMouseLeave = () => {
			isDraggingRef.current = false;
		};

		const canvas = document.querySelector("canvas");
		if (!canvas) return;

		canvas.addEventListener("mousedown", handleMouseDown);
		window.addEventListener("mouseup", handleMouseUp);
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			canvas.removeEventListener("mousedown", handleMouseDown);
			window.removeEventListener("mouseup", handleMouseUp);
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	useFrame(() => {
		const targetPosition = new Vector3(...cameraState.targetPosition);
		const distance = targetPosition.length();

		const rotatedPosition = new Vector3(
			Math.sin(rotationRef.current) * distance,
			targetPosition.y,
			Math.cos(rotationRef.current) * distance,
		);

		const lerpFactor = 0.2;
		camera.position.lerp(rotatedPosition, lerpFactor);

		camera.lookAt(0, targetPosition.y, 0);

		camera.zoom = cameraState.targetZoom;
		camera.updateProjectionMatrix();
	});

	return null;
};

export default CameraController;
