import { useState, useRef, useEffect } from "react";

export function useModelTransitions(initialOpacity = 1) {
	const [opacity, setOpacity] = useState(initialOpacity);
	const [targetOpacity, setTargetOpacity] = useState(initialOpacity);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const fadeRef = useRef<NodeJS.Timeout>();

	const FADE_OUT_DURATION = 600;
	const FADE_IN_DURATION = 2000;
	const INITIAL_FADE_IN_OPACITY = 0.1;

	const startTransition = (onComplete: () => void) => {
		if (fadeRef.current) {
			clearTimeout(fadeRef.current);
		}

		setIsTransitioning(true);
		setTargetOpacity(0);

		fadeRef.current = setTimeout(() => {
			onComplete();
			// Start new model at very low opacity
			setOpacity(INITIAL_FADE_IN_OPACITY);
			setTargetOpacity(1);

			fadeRef.current = setTimeout(() => {
				setIsTransitioning(false);
			}, FADE_IN_DURATION);
		}, FADE_OUT_DURATION);
	};

	useEffect(() => {
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
		isTransitioning,
		startTransition,
	};
}
