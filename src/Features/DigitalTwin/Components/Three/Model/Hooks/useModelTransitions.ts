// Hooks/useModelTransitions.ts
import { useState, useRef, useEffect } from "react";

export function useModelTransitions(initialOpacity = 1) {
	const [opacity, setOpacity] = useState(initialOpacity);
	const [targetOpacity, setTargetOpacity] = useState(initialOpacity);
	const fadeRef = useRef<NodeJS.Timeout>();

	useEffect(() => {
		if (fadeRef.current) {
			clearTimeout(fadeRef.current);
		}

		setTargetOpacity(0);

		fadeRef.current = setTimeout(() => {
			setTargetOpacity(1);
		}, 800);

		return () => {
			if (fadeRef.current) {
				clearTimeout(fadeRef.current);
			}
		};
	}, []);

	return {
		opacity,
		setOpacity,
		targetOpacity,
	};
}
