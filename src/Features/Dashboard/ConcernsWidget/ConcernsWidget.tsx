import { useState } from "react";
import styles from "./ConcernsWidget.module.scss";
import Chevron from "@assets/ConcernWidget/Chevron.svg?react";
import Slope from "@assets/ConcernsWidget/Slope.svg?react";
import { concernsMockData } from "./helpers/concernsMockData";
import { ConcernsCard } from "./Components/ConcernsCard/ConcernsCard";

export const ConcernsWidget = () => {
	const [isShowMore, setIsShowMore] = useState(false);

	const concernsToShow = isShowMore
		? concernsMockData
		: concernsMockData.slice(0, 3);

	const handleShowMore = () => {
		setIsShowMore((prev) => !prev);
	};

	return (
		<div className={styles["ConcernWidget-wrapper"]}>
			<div className={styles["ConcernWidget-head"]}>
				<div className={styles["ConcernWidget-tab-container"]}>
					<div className={styles["ConcernWidget-tab"]}>
						Key Areas of Concern
					</div>
					<Slope className={styles["ConcernWidget-slope"]} />
				</div>

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
				{concernsToShow.map((concern) => (
					<ConcernsCard key={concern.id} concern={concern} />
				))}
			</div>
		</div>
	);
};
