import React from "react";

interface CircleProgressBarProps {
	progress: number;
}

export const CircleProgressBar: React.FC<CircleProgressBarProps> = ({
	progress,
}) => {
	const r = 77;
	const circumstance = 2 * Math.PI * r;
	const strokeDashoffset = circumstance - (progress / 100) * circumstance;
	return (
		<div>
			<svg
				width='106'
				height='106'
				viewBox='0 0 160 160'
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'
				style={{ transform: "rotate(-90deg)" }}
			>
				<circle
					r='77'
					cx='80'
					cy='80'
					fill='transparent'
					stroke='rgba(212, 222, 235, 1)'
					stroke-width='6'
				></circle>
				<circle
					r='77'
					cx='80'
					cy='80'
					stroke='rgba(59, 141, 245, 1)'
					stroke-width='6'
					stroke-linecap='round'
					stroke-dashoffset={strokeDashoffset}
					fill='transparent'
					stroke-dasharray={circumstance}
				></circle>
				<text
					x='65px'
					y='65px'
					fill='black'
					font-size='20px'
					font-weight='bold'
					style={{ transform: "rotate(90deg) translate(0px, -130px)" }}
				>
					{progress}%
				</text>
			</svg>
		</div>
	);
};
