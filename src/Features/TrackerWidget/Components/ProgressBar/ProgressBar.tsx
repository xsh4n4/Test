import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
	progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
	return (
		<div className={styles["ProgressBar-container"]}>
			<div
				className={`${styles["ProgressBar-fill"]} ${styles["animate-fill"]}`}
				style={{ "--progress": `${progress}%` } as React.CSSProperties}
			/>
			<div
				className={`${styles["ProgressBar-slider"]} ${styles["animate-slider"]}`}
				style={{ "--progress": `${progress}%` } as React.CSSProperties}
			></div>
		</div>
	);
};
