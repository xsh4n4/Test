import { useFrame, useThree } from "@react-three/fiber";
import { useCamera } from "../Context/CameraContext";
import { Vector3 } from "three";
import { useRef, useEffect } from "react";

const CameraController = () => {
	const { camera } = useThree();
	const { cameraState } = useCamera();
	const rotationRef = useRef<number>(0);
	const isDraggingRef = useRef<boolean>(false);
	const previousMouseXRef = useRef<number>(0);
	const currentPositionRef = useRef(new Vector3());
	const currentZoomRef = useRef(camera.zoom);

	const MAX_ROTATION = Math.PI / 4;
	const POSITION_LERP_FACTOR = 0.05;
	const ZOOM_LERP_FACTOR = 0.08; // Separate lerp factor for zoom

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
			const sensitivity = 0.005;
			const newRotation = rotationRef.current - deltaX * sensitivity;
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

		if (!currentPositionRef.current.equals(rotatedPosition)) {
			currentPositionRef.current.lerp(rotatedPosition, POSITION_LERP_FACTOR);
		}

		camera.position.copy(currentPositionRef.current);
		camera.lookAt(0, targetPosition.y, 0);

		currentZoomRef.current +=
			(cameraState.targetZoom - currentZoomRef.current) * ZOOM_LERP_FACTOR;
		camera.zoom = currentZoomRef.current;
		camera.updateProjectionMatrix();
	});

	return null;
};

export default CameraController;
