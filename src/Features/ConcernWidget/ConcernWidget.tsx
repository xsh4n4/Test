import { useState } from "react";
import styles from "./ConcernWidget.module.scss";
import Chevron from "@assets/ConcernWidget/Chevron.svg?react";
import healthConcernsMock from "./helpers/healthConcernsMock";
import { SystemReport } from "./Components/SystemReport/SystemReport";

export const ConcernWidget = () => {
	const [isShowMore, setIsShowMore] = useState(false);
	const [openSystemIndex, setOpenSystemIndex] = useState(0);

	const systemsToShow = isShowMore
		? healthConcernsMock
		: healthConcernsMock.slice(0, 3);

	const toggleOpenRow = (index: number) => {
		setOpenSystemIndex((prevIndex) => (prevIndex === index ? -1 : index));
	};

	const handleShowMore = () => {
		setIsShowMore((prev) => !prev);
		if (openSystemIndex >= 3) {
			setOpenSystemIndex(0);
		}
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
							: `Show ${healthConcernsMock.length - 3} more`}
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
			<div
				className={`${styles["ConcernWidget-content"]} ${
					isShowMore ? styles["expand"] : styles["collapse"]
				}`}
			>
				{systemsToShow.map((system, index) => (
					<SystemReport
						key={index}
						system={system}
						index={index}
						toggleOpenRow={toggleOpenRow}
						isOpen={openSystemIndex === index}
					/>
				))}
			</div>
		</div>
	);
};
