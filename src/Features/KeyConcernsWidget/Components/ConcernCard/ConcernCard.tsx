import { Concern } from "../../helpers/concernsMock";
import styles from "./ConcernCard.module.scss";
import Check from "@assets/KeyConcernsWidget/Check.svg?react";

interface ConcernCardProps {
	concern: Concern;
	isChecked: boolean;
	toggleConcern: (title: number) => void;
}

export const ConcernCard = ({
	concern,
	isChecked,
	toggleConcern,
}: ConcernCardProps) => {
	return (
		<div className={styles["ConcernCard-container"]}>
			<div className={styles["ConcernCard-head"]}>
				<div className={styles["ConcernCard-title"]}>{concern.title}</div>
				<div className={styles["ConcernCard-icon-container"]}>
					<label className={styles["ConcernCard-checkbox-container"]}>
						<input
							type='checkbox'
							checked={isChecked}
							onChange={() => toggleConcern(concern.id)}
							className={styles["ConcernCard-checkbox"]}
						/>
						<span className={styles["ConcernCard-custom-checkbox"]}>
							{isChecked && <Check />}
						</span>
					</label>
				</div>
			</div>
			<div className={styles["ConcernCard-body"]}>
				<div className={styles["ConcernCard-results"]}>{concern.result}</div>
				<div className={styles["ConcernCard-foot"]}>
					<div
						className={`${styles["ConcernCard-status"]} ${
							concern.status === "High"
								? styles["status-high"]
								: concern.status === "Medium"
									? styles["status-medium"]
									: styles["status-low"]
						}`}
					>
						{concern.status}
						<span className={styles["ConcernCard-status-dot"]}></span>
					</div>

					<div className={styles["ConcernCard-system"]}>{concern.system}</div>
				</div>
			</div>
		</div>
	);
};
