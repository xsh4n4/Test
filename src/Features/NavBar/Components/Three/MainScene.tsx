import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import "./canvas.scss";
import { useCamera } from "../../../DigitalTwin/Context/CameraContext";
import CameraController from "@/Features/DigitalTwin/Controller/CameraController";

const MainScene = () => {
	const zoomValue = 0.9;
	const { cameraState, setCameraState } = useCamera();
	const isStretched = false;

	// Zoom configuration
	const ZOOM_FACTOR = 1.1;
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

	return (
		<div className='canvas-container'>
			<Canvas
				className={`canvas-class ${isStretched ? "stretched" : ""}`}
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
					position={[0, (-zoomValue * 70) / 2 - 1, 0]}
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
				<button className='control-btn stretch-btn'>
					<span>↗</span>
				</button>
			</div>
		</div>
	);
};

export default MainScene;
