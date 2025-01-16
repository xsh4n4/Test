import { useState } from "react";
import styles from "./KeyConcernsWidget.module.scss";
import Chevron from "@assets/ConcernWidget/Chevron.svg?react";
import { ConcernCard } from "./Components/ConcernCard/ConcernCard";
import { concernsMock } from "./helpers/concernsMock";
import { Tabs } from "./Components/Tabs/Tabs";

export const KeyConcernsWidget = () => {
	const [isShowMore, setIsShowMore] = useState(false);
	const [selectedConcerns, setSelectedConcerns] = useState<number[]>([]);

	const handleShowMore = () => {
		setIsShowMore((prev) => !prev);
	};

	const toggleConcern = (id: number) => {
		setSelectedConcerns((prev) =>
			prev.includes(id)
				? prev.filter((selectedId) => selectedId !== id)
				: [...prev, id],
		);
	};

	return (
		<div className={styles["KeyConcernsWidget-wrapper"]}>
			<div className={styles["KeyConcernsWidget-head"]}>
				<div className={styles["KeyConcernsWidget-tab"]}>
					Key Areas of Concern
				</div>
				<div
					className={styles["KeyConcernsWidget-more"]}
					onClick={() => handleShowMore()}
				>
					<p className={styles["KeyConcernsWidget-more-text"]}>
						{isShowMore ? "Show Less" : `Show 7 more`}
					</p>
					<div className={styles["KeyConcernsWidget-chevron-container"]}>
						<Chevron
							className={`${styles["KeyConcernsWidget-chevron"]} ${
								isShowMore ? styles["rotate-chevron"] : ""
							}`}
						/>
					</div>
				</div>
			</div>
			<div className={styles["KeyConcernsWidget-content"]}>
				<div className={styles["KeyConcernsWidget-cards"]}>
					{concernsMock
						.slice(0, isShowMore ? concernsMock.length : 3)
						.map((concern, index) => (
							<ConcernCard
								key={index}
								concern={concern}
								isChecked={selectedConcerns.includes(concern.id)}
								toggleConcern={toggleConcern}
							/>
						))}
				</div>
				<div className={styles["KeyConcernsWidget-plan"]}>
					<Tabs />
				</div>
			</div>
		</div>
	);
};
