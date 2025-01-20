import styles from "./SystemDetailWidget.module.scss";
import Report from "@assets/SystemDetailWidget/Report.svg?react";
import { systemDetailMockData } from "./helpers/systemDetailMockData";
import { RootState } from "@/App/Redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";

export const SystemDetailWidget = () => {
	const selectedCategory = useSelector(
		(state: RootState) => state.category.selectedCategory,
	);

	const [detail, setDetail] = useState({
		title: "",
		description: "No details available.",
	});

	const handleAnimationStart = () => {
		if (selectedCategory !== "total") {
			setDetail(systemDetailMockData[0]);
		}
	};

	return (
		<div
			className={`${styles["SystemDetailWidget-container"]} ${
				selectedCategory === "total"
					? styles["SystemDetailWidget-container-collapse"]
					: styles["SystemDetailWidget-container-expand"]
			}`}
			onAnimationStart={handleAnimationStart}
		>
			<div className={styles["SystemDetailWidget-head"]}>
				<h3 className={styles["SystemDetailWidget-title"]}>{detail.title}</h3>
				<div className={styles["SystemDetailWidget-report"]}>
					<p className={styles["SystemDetailWidget-report-text"]}>
						View report {selectedCategory}
					</p>
					<div className={styles["SystemDetailWidget-report-icon"]}>
						<Report />
					</div>
				</div>
			</div>
			<p className={styles["SystemDetailWidget-body"]}>{detail.description}</p>
		</div>
	);
};
