import { Symptoms } from "../../helpers/detailedSystemConcerns";
import styles from "./SymptomsList.module.scss";

interface SymptomsProps {
	symptoms?: Symptoms;
}

export const SymptomsList: React.FC<SymptomsProps> = ({ symptoms }) => {
	return (
		<div className={styles["SymptomsList-container"]}>
			<div className={styles["SymptomsList-head"]}>Symptoms</div>
			<div className={styles["SymptomsList-description"]}>
				{symptoms?.description}
			</div>
			<div className={styles["SymptomsList-list"]}>
				{symptoms?.symptomsList.map((symptom, index) => (
					<div key={index} className={styles["SymptomsList-symptom"]}>
						{symptom}
					</div>
				))}
			</div>
		</div>
	);
};
