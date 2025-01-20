import { useState } from "react";
import styles from "./ConcernsWidget.module.scss";
import Chevron from "@assets/ConcernWidget/Chevron.svg?react";
import Slope from "@assets/ConcernsWidget/Slope.svg?react";
import { concernsMockData } from "./helpers/concernsMockData";
import { detailedSystemConcerns } from "./helpers/detailedSystemConcerns";
import { ConcernsCard } from "./Components/ConcernsCard/ConcernsCard";
import { useSelector } from "react-redux";
import { RootState } from "@/App/Redux/store";
import { DetailsCard } from "./Components/DetailsCard/DetailsCard";
import { ReasonsTable } from "./Components/ReasonsTable/ReasonsTable";

export const ConcernsWidget = () => {
	const [isShowMore, setIsShowMore] = useState(false);
	const [detailIndex, setDetailIndex] = useState(1);

	const selectedCategory = useSelector(
		(state: RootState) => state.category.selectedCategory,
	);

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
				<div className={styles["ConcernWidget-cards-layout"]}>
					<div
						className={`${styles["ConcernWidget-concern-cards"]} ${
							selectedCategory !== "total"
								? styles["ConcernWidget-concern-cards-hidden"]
								: styles["ConcernWidget-concern-cards-visible"]
						}`}
					>
						{concernsToShow.map((concern) => (
							<ConcernsCard key={concern.id} concern={concern} />
						))}
					</div>

					<div
						className={`${styles["ConcernWidget-detail-cards"]} ${
							selectedCategory !== "total"
								? styles["ConcernWidget-detail-cards-visible"]
								: styles["ConcernWidget-detail-cards-hidden"]
						}`}
					>
						{detailedSystemConcerns[0].details.map((detail) => (
							<DetailsCard
								key={detail.id}
								detail={detail}
								detailIndex={detailIndex}
								setDetailIndex={setDetailIndex}
							/>
						))}
					</div>
				</div>
				<div
					className={`${styles["ConcernWidget-reasons"]} ${
						selectedCategory !== "total"
							? styles["ConcernWidget-reasons-visible"]
							: styles["ConcernWidget-reasons-hidden"]
					}`}
				>
					<ReasonsTable
						reasons={detailedSystemConcerns[0].details[detailIndex - 1].reasons}
						detailIndex={detailIndex}
					/>
				</div>
			</div>
		</div>
	);
};
