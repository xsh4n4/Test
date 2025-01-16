import { Clone } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/Addons.js";
import { useRef, useState } from "react";

interface ModelProps {
	position?: [number, number, number];
	rotation?: [number, number, number];
	scale?: [number, number, number];
}

function Model({ position, rotation, scale }: ModelProps) {
	const obj = useLoader(OBJLoader, "/assets/models/body.obj");
	const { risk } = { risk: 0 };
	const [currentPosition, setCurrentPosition] = useState(position);
	const [currentScale, setCurrentScale] = useState(scale);

	const prevPosition = useRef(position);
	const prevScale = useRef(scale);

	useFrame(() => {
		if (risk && position && scale) {
			const s = scale[0] * 3;
			const targetPosition = [position[0], position[1] - 47.5 * s, position[2]];
			const targetScale = [s, s, s];

			setCurrentPosition(
				(prevPos) =>
					prevPos && [
						prevPos[0] + (targetPosition[0] - prevPos[0]) * 0.1,
						prevPos[1] + (targetPosition[1] - prevPos[1]) * 0.1,
						prevPos[2] + (targetPosition[2] - prevPos[2]) * 0.1,
					],
			);

			setCurrentScale(
				(prevScaleValue) =>
					prevScaleValue && [
						prevScaleValue[0] + (targetScale[0] - prevScaleValue[0]) * 0.1,
						prevScaleValue[1] + (targetScale[1] - prevScaleValue[1]) * 0.1,
						prevScaleValue[2] + (targetScale[2] - prevScaleValue[2]) * 0.1,
					],
			);
		} else if (position && scale) {
			const targetPosition = position;
			const targetScale = scale;
			setCurrentPosition(
				(prevPos) =>
					prevPos && [
						prevPos[0] + (targetPosition[0] - prevPos[0]) * 0.1,
						prevPos[1] + (targetPosition[1] - prevPos[1]) * 0.1,
						prevPos[2] + (targetPosition[2] - prevPos[2]) * 0.1,
					],
			);

			setCurrentScale(
				(prevScaleValue) =>
					prevScaleValue && [
						prevScaleValue[0] + (targetScale[0] - prevScaleValue[0]) * 0.1,
						prevScaleValue[1] + (targetScale[1] - prevScaleValue[1]) * 0.1,
						prevScaleValue[2] + (targetScale[2] - prevScaleValue[2]) * 0.1,
					],
			);
		}

		prevPosition.current = currentPosition;
		prevScale.current = currentScale;
	});
	return (
		<>
			<Clone
				frustumCulled={false}
				object={obj}
				position={prevPosition.current}
				rotation={rotation}
				scale={prevScale.current}
				inject={<meshBasicMaterial color={"blue"} wireframe />}
			/>
			<Clone
				frustumCulled={false}
				object={obj}
				position={prevPosition.current}
				rotation={rotation}
				scale={prevScale.current}
				inject={<meshBasicMaterial color={"white"} />}
			/>
		</>
	);
}

export default Model;
