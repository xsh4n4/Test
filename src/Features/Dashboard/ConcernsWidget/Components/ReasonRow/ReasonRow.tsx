import styles from "./ReasonRow.module.scss";
import { Reason } from "../../helpers/detailedSystemConcerns";

import Chevron from "@assets/ConcernWidget/Chevron.svg?react";
import { useState } from "react";

interface ReasonRowProps {
	reason: Reason;
}

export const ReasonRow: React.FC<ReasonRowProps> = ({ reason }) => {
	const [isShowMore, setIsShowMore] = useState(false);

	return (
		<div
			className={`${styles["ReasonRow-container"]} ${
				isShowMore && styles["ReasonRow-container-open"]
			}`}
		>
			<div
				className={styles["ReasonRow-row"]}
				onClick={() => setIsShowMore((prev) => !prev)}
			>
				<div className={styles["ReasonRow-chevron-container"]}>
					<Chevron
						className={`${styles["ReasonRow-chevron"]} ${
							isShowMore ? styles["rotate-chevron"] : ""
						}`}
					/>
				</div>
				<div className={styles["ReasonRow-title"]}>{reason.title}</div>
				<div className={styles["ReasonRow-test"]}>
					<div className={styles["ReasonRow-icon"]}>
						<img src={reason.icon} alt={`${reason.title} icon`} />
					</div>
					<div className={styles["ReasonRow-test-name"]}>{reason.test}</div>
				</div>
				<div
					className={`${styles["ReasonRow-level"]} ${
						reason.level === 0 && styles["ReasonRow-level-hidden"]
					}`}
				>
					<div
						className={styles["ReasonRow-thumb"]}
						style={{ "--level": `${reason.level}%` } as React.CSSProperties}
					>
						<div className={styles["ReasonRow-thumb-line"]} />
					</div>
				</div>
				<div className={styles["ReasonRow-value"]}>
					<div className={styles["ReasonRow-value-number"]}>{reason.value}</div>
					<div className={styles["ReasonRow-value-unit"]}>{reason.unit}</div>
				</div>
				<div className={styles["ReasonRow-status-wrapper"]}>
					<div className={styles["ReasonRow-status"]}>{reason.status}</div>
				</div>
				<div className={styles["ReasonRow-date"]}>{reason.date}</div>
			</div>
			<div
				className={`${styles["ReasonRow-description"]} ${
					isShowMore && styles["ReasonRow-description-open"]
				}`}
			>
				{reason.description}
			</div>
		</div>
	);
};
