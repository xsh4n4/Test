import React, { useState } from "react";
import "./GoalProgressMenu.scss";
import ProgressRing from "@features/Risk/GoalProgressMenu/ProgressRing.tsx";
import useInitialGoals from "@features/Risk/GoalProgressMenu/InitialGoals.tsx";

const PyramidIcon = ({
	className,
	onClick,
}: {
	className?: string;
	onClick?: React.MouseEventHandler<SVGSVGElement>;
}) => (
	<svg
		onClick={onClick}
		className={className}
		width='16'
		height='16'
		viewBox='0 0 16 16'
		fill='rgba(0, 65, 196, 1)'
		xmlns='http://www.w3.org/2000/svg'
		style={{ cursor: "pointer" }}
	>
		<path d='M8 2 L2 14 L14 14 Z' />
	</svg>
);

const GoalsProgressMenu = ({ totalGoals = 6, completedGoals = 1 }) => {
	const initialGoals = useInitialGoals();

	const daysOfWeek = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	const [isOpen, setIsOpen] = useState(false);
	const [currentProgress, setCurrentProgress] = useState(completedGoals);
	const [goalsState] = useState<{ [day: string]: boolean[] }>(
		daysOfWeek.reduce(
			(state, day) => {
				state[day] = initialGoals.map(() => false);
				return state;
			},
			{} as { [day: string]: boolean[] },
		),
	);

	const [activeDay, setActiveDay] = useState<string>(
		daysOfWeek[new Date().getDay() - 1] || "Monday",
	);

	const calculateProgressPercentage = (day: string) => {
		const completed = goalsState[day].filter((g) => g).length;
		const total = goalsState[day].length;
		return Math.round((completed / total) * 100);
	};

	return (
		<div className='container'>
			<div className={`button ${isOpen ? "open" : ""}`}>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M11.25 13C10.9039 13 10.5655 12.8974 10.2778 12.7051...'
						fill='#515967'
					/>
				</svg>

				<span className='label'>Today's goals</span>

				<div className='progress-wrapper'>
					<div className='progress-container'>
						<div
							className='progress-bar'
							style={{ width: `${(currentProgress / totalGoals) * 100}%` }}
						>
							<div className='handle' />
						</div>
					</div>
				</div>

				<span className='counter'>
					<span className='current-progress'>{currentProgress}</span>
					<span className='divider'>/</span>
					<span className='total-goals'>{totalGoals}</span>
				</span>

				<PyramidIcon
					className={`chevron ${!isOpen ? "rotate" : ""}`}
					onClick={(e) => {
						e.stopPropagation();
						setIsOpen(!isOpen);
					}}
				/>
			</div>

			{isOpen && (
				<div className='dropdown'>
					<div className='days-wrapper'>
						{daysOfWeek.map((day) => {
							const hasCheckedGoals = goalsState[day].some((goal) => goal);
							return (
								<React.Fragment key={day}>
									<button
										className={`day-button ${activeDay === day ? "active" : ""}`}
										onClick={() => {
											setActiveDay(day);
											setCurrentProgress(
												goalsState[day].filter((goal) => goal).length,
											);
										}}
									>
										<div
											style={{ display: "flex", alignItems: "center", gap: 8 }}
										>
											<ProgressRing
												progress={calculateProgressPercentage(day)}
												hasCheckedGoals={hasCheckedGoals}
												isActive={activeDay === day}
											/>
											{day.slice(0, 3)}
										</div>
									</button>
								</React.Fragment>
							);
						})}
					</div>

					{activeDay &&
						initialGoals.map((goal) => (
							<div key={goal.id} className='goal-item'>
								<div className='goal-content'>
									{goal.icon}
									<span className='goal-text'>{goal.text}</span>
									<span className='stats-badge'>{goal.stats}</span>
								</div>
							</div>
						))}

					<div className='edit-goals'>
						<span>Edit goals</span>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M15 13H1V14H15V13Z' fill='#0041C4' />
							<path
								d='M12.7 4.5C13.1 4.1 13.1 3.5 12.7 3.1...'
								fill='#0041C4'
							/>
						</svg>
					</div>
				</div>
			)}
		</div>
	);
};

export default GoalsProgressMenu;
