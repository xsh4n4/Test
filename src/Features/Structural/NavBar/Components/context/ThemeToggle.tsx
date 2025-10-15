import { useTheme } from "./ThemeContext";
import "./ThemeToggle.scss";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button className='theme-toggle' onClick={toggleTheme}>
			{theme === "light" ? (
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle cx='12' cy='12' r='5' fill='#535bf2' /> {/* central circle */}
					{/* 8 rays */}
					<line
						x1='12'
						y1='1'
						x2='12'
						y2='4'
						stroke='#535bf2'
						strokeWidth='2'
						strokeLinecap='round'
					/>
					<line
						x1='12'
						y1='20'
						x2='12'
						y2='23'
						stroke='#535bf2'
						strokeWidth='2'
						strokeLinecap='round'
					/>
					<line
						x1='1'
						y1='12'
						x2='4'
						y2='12'
						stroke='#535bf2'
						strokeWidth='2'
						strokeLinecap='round'
					/>
					<line
						x1='20'
						y1='12'
						x2='23'
						y2='12'
						stroke='#535bf2'
						strokeWidth='2'
						strokeLinecap='round'
					/>
					<line
						x1='4.5'
						y1='4.5'
						x2='7'
						y2='7'
						stroke='#535bf2'
						strokeWidth='2'
						strokeLinecap='round'
					/>
					<line
						x1='16.5'
						y1='16.5'
						x2='19'
						y2='19'
						stroke='#535bf2'
						strokeWidth='2'
						strokeLinecap='round'
					/>
					<line
						x1='4.5'
						y1='19.5'
						x2='7'
						y2='17'
						stroke='#535bf2'
						strokeWidth='2'
						strokeLinecap='round'
					/>
					<line
						x1='16.5'
						y1='7.5'
						x2='19'
						y2='5'
						stroke='#535bf2'
						strokeWidth='2'
						strokeLinecap='round'
					/>
				</svg>
			) : (
				<svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
					<path
						d='M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z'
						fill='#535bf2'
					/>
				</svg>
			)}
		</button>
	);
};

export default ThemeToggle;
