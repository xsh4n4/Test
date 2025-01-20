
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

const MainScene = () => {
    const { cameraState } = useCamera();
    const [modelType, setModelType] = useState<ModelType>("body");
    const { MODEL_ZOOM_VALUE } = SCENE_CONSTANTS;

    const handleModelChange = (type: ModelType) => {
        setModelType(type);
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
                    <Model
                        key={modelType}
                        scale={[MODEL_ZOOM_VALUE, MODEL_ZOOM_VALUE, MODEL_ZOOM_VALUE]}
                        position={[0, (-MODEL_ZOOM_VALUE * 70) / 2 - 1, 0]}
                        modelType={modelType}
                    />
                </Canvas>
                <ZoomControls />
            </div>
        </div>
    );
};

export default MainScene;