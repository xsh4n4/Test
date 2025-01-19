import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import "./canvas.scss";
import { useCamera } from "../../../DigitalTwin/Context/CameraContext";
import CameraController from "@/Features/DigitalTwin/Controller/CameraController";
import SideBar from "@/Features/DigitalTwin/Components/SideBar/SideBar";
import { useState } from "react";

const MainScene = () => {
	const zoomValue = 1.1;
	const { cameraState, setCameraState } = useCamera();
	const [modelType, setModelType] = useState<"body" | "cardio">("body");

	const ZOOM_FACTOR = 1.05;
	const DEFAULT_ZOOM = 10;
	const MAX_ZOOM = 60;
	const MIN_ZOOM = DEFAULT_ZOOM;

	const handleZoomIn = () => {
		const newZoom = cameraState.targetZoom * ZOOM_FACTOR;
		if (newZoom <= MAX_ZOOM) {
			setCameraState({
				...cameraState,
				targetZoom: newZoom,
			});
		}
	};

	const handleZoomOut = () => {
		const newZoom = cameraState.targetZoom / ZOOM_FACTOR;
		if (newZoom >= MIN_ZOOM) {
			setCameraState({
				...cameraState,
				targetZoom: newZoom,
			});
		} else {
			setCameraState({
				...cameraState,
				targetZoom: DEFAULT_ZOOM,
			});
		}
	};

	const nextZoomIn = cameraState.targetZoom * ZOOM_FACTOR;
	const isZoomInDisabled = nextZoomIn > MAX_ZOOM;
	const nextZoomOut = cameraState.targetZoom / ZOOM_FACTOR;
	const isZoomOutDisabled = nextZoomOut < MIN_ZOOM;

	const handleModelChange = (type: "body" | "cardio") => {
		setModelType(type);
	};

	return (
		<div className='canvas-container'>
			<SideBar onModelChange={handleModelChange} />
			<div className='canvas-wrapper'>
				<Canvas
					orthographic
					camera={{
						near: 0.0001,
						far: 20000,
						zoom: cameraState.targetZoom,
						position: cameraState.targetPosition,
					}}
				>
					<CameraController />
					<Model
						scale={[zoomValue, zoomValue, zoomValue]}
						position={
							modelType === "cardio"
								? [0, (-zoomValue * 70) / 2 - 1.5, 0]
								: [0, (-zoomValue * 70) / 2 - 1, 0]
						}
						modelType={modelType}
					/>
				</Canvas>
				<div className='canvas-controls'>
					<button
						onClick={handleZoomIn}
						className='control-btn'
						disabled={isZoomInDisabled}
					>
						<span>+</span>
					</button>
					<button
						onClick={handleZoomOut}
						className='control-btn'
						disabled={isZoomOutDisabled}
					>
						<span>−</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default MainScene;
