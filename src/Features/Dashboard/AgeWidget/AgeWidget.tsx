import { useTranslation } from "react-i18next";
import styles from "./AgeWidget.module.scss";
import { AgeMetrics } from "./Components/AgeMetrics/AgeMetrics";
import { AgeSlider } from "./Components/AgeSlider/AgeSlider";

export const AgeWidget = () => {
	const { i18n } = useTranslation();
	const ageData = { biologicalAge: 47, chronoAge: 54 };

	return (
		<div key={i18n.language} className={styles["AgeWidget-container"]}>
			<AgeMetrics ageData={ageData} />
			<AgeSlider ageData={ageData} />
		</div>
	);
};
