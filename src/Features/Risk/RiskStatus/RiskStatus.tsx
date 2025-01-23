import { RiskSlider } from "./Components/RiskSlider/RiskSlider";
import styles from "./RiskStatus.module.scss";

export const RiskStatus = () => {
	return (
		<div className={styles["RiskStatus-wrapper"]}>
			<div className={styles["text"]}>
				You have a <span>high concern</span> of developing Atrial Fibrillation
			</div>
			<RiskSlider riskPercentage={80} />
		</div>
	);
};
