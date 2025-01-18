import ArrowRightIcon from "@assets/General/ArrowRight.svg?react";
import RefreshIcon from "@assets/General/Refresh.svg?react";
import styles from "./ConfigControl.module.scss";

export const ConfigControl = () => {
	return (
		<div className={styles["config-control-bar"]}>
			<button className={styles["config-control-bar-skip"]}>
				Skip <RefreshIcon />
			</button>
			<button className={styles["config-control-bar-submit"]}>
				Submit My Health Data <ArrowRightIcon />
			</button>
		</div>
	);
};
