import { useState } from "react";
import styles from "./ConcernsCard.module.scss";
import { Concern } from "../../helpers/concernsMockData";

interface ConcernsCardProps {
	concern: Concern;
}

export const ConcernsCard: React.FC<ConcernsCardProps> = ({ concern }) => {
	const [isShowMore, setIsShowMore] = useState(false);

	return (
		<div className={styles["ConcernsCard-card"]}>
			<div className={styles["ConcernsCard-head"]}>
				<div className={styles["ConcernsCard-icon-container"]}>
					<img src={concern.icon} alt={`${concern.title} icon`} />
				</div>
				<div
					className={`${styles["ConcernsCard-status"]} ${
						concern.status === "High"
							? styles["ConcernsCard-status-red"]
							: concern.status === "Medium"
								? styles["ConcernsCard-status-orange"]
								: styles["ConcernsCard-status-green"]
					}`}
				>
					<div className={styles["ConcernsCard-status-exclamation"]}>!</div>
					<div className={styles["ConcernsCard-status-text"]}>
						{concern.status}
					</div>
				</div>
			</div>
			<div className={styles["ConcernsCard-body"]}>
				<div className={styles["ConcernsCard-body-title"]}>{concern.title}</div>
				<div className={styles["ConcernsCard-body-description"]}>
					{!isShowMore ? (
						<>
							<span
								className={`${styles["ConcernsCard-highlight"]} ${
									concern.status === "High"
										? styles["ConcernsCard-highlight-red"]
										: concern.status === "Medium"
											? styles["ConcernsCard-highlight-orange"]
											: styles["ConcernsCard-highlight-green"]
								}`}
							>
								{concern.factors[0]}
							</span>
							{concern.factors.length > 1 && (
								<span>
									{" "}
									level and other {concern.factors.length - 1} factors
									<span
										className={styles["ConcernsCard-show"]}
										onClick={() => setIsShowMore(true)}
									>
										{" "}
										Show
									</span>
								</span>
							)}
						</>
					) : (
						<div className={styles["ConcernsCard-description-open"]}>
							<ul className={styles["ConcernsCard-factors"]}>
								{concern.factors.map((factor, index) => (
									<li
										key={index}
										className={styles["ConcernsCard-factor-item"]}
									>
										{factor}
									</li>
								))}
							</ul>
							<span
								className={styles["ConcernsCard-hide"]}
								onClick={() => setIsShowMore(false)}
							>
								Hide
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
