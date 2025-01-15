import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import "./canvas.scss";
import CameraController from "./CameraController";

const MainScene = () => {
	const zoomValue = 0.9;

	return (
		<Canvas
			className='canvas-class'
			orthographic
			camera={{ near: 0.0001, far: 20000, zoom: 10, position: [0, 0, 200] }}
		>
			<CameraController />
			<Model
				scale={[zoomValue, zoomValue, zoomValue]}
				position={[0, (-zoomValue * 70) / 2 + 2, 0]}
			/>
		</Canvas>
	);
};

export default MainScene;
