import { useState } from "react";
import styles from "./ConcernsWidget.module.scss";
import Chevron from "@assets/ConcernWidget/Chevron.svg?react";
import Lines from "@assets/ConcernsWidget/Lines.svg?react";
import { concernsMockData } from "./helpers/concernsMockData";

export const ConcernsWidget = () => {
	const [isShowMore, setIsShowMore] = useState(false);

	const systemsToShow = isShowMore
		? concernsMockData
		: concernsMockData.slice(0, 3);

	const handleShowMore = () => {
		setIsShowMore((prev) => !prev);
	};

	return (
		<div className={styles["ConcernWidget-wrapper"]}>
			<div className={styles["ConcernWidget-head"]}>
				<div className={styles["ConcernWidget-tab"]}>Key Areas of Concern</div>
				<div
					className={styles["ConcernWidget-more"]}
					onClick={() => handleShowMore()}
				>
					<p className={styles["ConcernWidget-more-text"]}>
						{isShowMore
							? "Show Less"
							: `Show ${concernsMockData.length - 3} more`}
					</p>
					<div className={styles["ConcernWidget-chevron-container"]}>
						<Chevron
							className={`${styles["ConcernWidget-chevron"]} ${
								isShowMore ? styles["rotate-chevron"] : ""
							}`}
						/>
					</div>
				</div>
			</div>
			<div className={styles["ConcernWidget-content"]}>
				{systemsToShow.map((system) => (
					<div key={system.id} className={styles["ConcernWidget-card"]}>
						<div className={styles["ConcernWidget-head"]}>
							<div className={styles["ConcernWidget-icon-container"]}>
								<img src={system.icon} alt={`${system.title} icon`} />
							</div>{" "}
							<div className={styles["ConcernWidget-status"]}>
								<Lines />
							</div>
						</div>
						<div className={styles["ConcernWidget-body"]}>
							<div className={styles["ConcernWidget-body-title"]}>
								{system.title}
							</div>
							<div className={styles["ConcernWidget-body-description"]}>
								<p className={styles["ConcernWidget-body-text"]}>
									{system.description}
								</p>
								<div className={styles["ConcernWidget-why"]}>
									<div className={styles["ConcernWidget-why-text"]}>
										{system.whyText}
									</div>
									<Chevron
										className={`${styles["ConcernWidget-chevron"]}
										}`}
									/>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
