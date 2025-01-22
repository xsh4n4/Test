import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { useCamera } from "../../../Context/CameraContext";
import { SCENE_CONSTANTS, CAMERA_SETTINGS } from "./Constants/SceneConstants";
import { ModelType } from "./Types/ZoomTypes";
import Model from "../Model/Model";
import CameraController from "../../../Controller/CameraController";
import SideBar from "../../SideBar/SideBar";
import ZoomControls from "./Controls/ZoomControls";
import "./canvas.scss";

const TRANSITION_CAMERA_SETTINGS = {
	POSITION: [0, 0, 600] as [number, number, number],
	ZOOM: 3,
};

const MainScene = () => {
	const { cameraState, setCameraState } = useCamera();
	const [modelType, setModelType] = useState<ModelType>("body");
	const [previousModelType, setPreviousModelType] = useState<ModelType | null>(
		null,
	);
	const [isModelHidden, setIsModelHidden] = useState(false);
	const [pendingCameraConfig, setPendingCameraConfig] = useState<{
		position: [number, number, number];
		zoom: number;
	} | null>(null);
	const { MODEL_ZOOM_VALUE } = SCENE_CONSTANTS;

	const moveCamera = (
		position: [number, number, number],
		zoom: number,
		delay = 0,
	) => {
		setTimeout(() => {
			setCameraState({
				targetPosition: position,
				targetZoom: zoom,
			});
		}, delay);
	};

	const handleModelTransitionComplete = () => {
		if (pendingCameraConfig) {
			setIsModelHidden(true);

			moveCamera(
				TRANSITION_CAMERA_SETTINGS.POSITION,
				TRANSITION_CAMERA_SETTINGS.ZOOM,
			);

			setTimeout(() => {
				moveCamera(pendingCameraConfig.position, pendingCameraConfig.zoom);

				setTimeout(() => {
					setIsModelHidden(false);
					setPendingCameraConfig(null);
				}, 200);
			}, 1500);
		}
	};

	const handleModelChange = (
		type: ModelType,
		cameraConfig: {
			position: [number, number, number];
			zoom: number;
		},
	) => {
		if (type === modelType && !isModelHidden) {
			moveCamera(
				TRANSITION_CAMERA_SETTINGS.POSITION,
				TRANSITION_CAMERA_SETTINGS.ZOOM,
			);

			setTimeout(() => {
				moveCamera(
					CAMERA_SETTINGS.DEFAULT_POSITION,
					CAMERA_SETTINGS.DEFAULT_ZOOM,
				);
			}, 1000);
			return;
		}

		setPreviousModelType(modelType);
		setModelType(type);
		setPendingCameraConfig(cameraConfig);
	};

	return (
		<div className='canvas-container'>
			<SideBar onModelChange={handleModelChange} />
			<div className='canvas-wrapper'>
				<Canvas
					orthographic
					camera={{
						near: CAMERA_SETTINGS.NEAR,
						far: CAMERA_SETTINGS.FAR,
						zoom: cameraState.targetZoom,
						position: cameraState.targetPosition,
					}}
				>
					<CameraController />
					{previousModelType && (
						<Model
							key={`previous-${previousModelType}`}
							scale={[MODEL_ZOOM_VALUE, MODEL_ZOOM_VALUE, MODEL_ZOOM_VALUE]}
							position={[0, (-MODEL_ZOOM_VALUE * 70) / 2 - 1, 0]}
							modelType={previousModelType}
							isFading={true}
							onTransitionComplete={handleModelTransitionComplete}
							isHidden={isModelHidden}
						/>
					)}
					<Model
						key={`current-${modelType}`}
						scale={[MODEL_ZOOM_VALUE, MODEL_ZOOM_VALUE, MODEL_ZOOM_VALUE]}
						position={[0, (-MODEL_ZOOM_VALUE * 70) / 2 - 1, 0]}
						modelType={modelType}
						isNew={true}
						isHidden={isModelHidden}
					/>
				</Canvas>
				<ZoomControls />
			</div>
		</div>
	);
};

export default MainScene;
