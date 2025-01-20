import styles from "./SystemDetailWidget.module.scss";
import Report from "@assets/SystemDetailWidget/Report.svg?react";
import { systemDetailMockData } from "./helpers/systemDetailMockData";
import { RootState } from "@/App/Redux/store";
import { useSelector } from "react-redux";

export const SystemDetailWidget = () => {
	const selectedCategory = useSelector(
		(state: RootState) => state.category.selectedCategory,
	);

	const detail =
		selectedCategory === "cardiovascular"
			? systemDetailMockData[0]
			: { title: "Default", description: "No details available." };

	return (
		<div className={styles["SystemDetailWidget-container"]}>
			<div className={styles["SystemDetailWidget-head"]}>
				<h3 className={styles["SystemDetailWidget-title"]}>{detail.title}</h3>
				<div className={styles["SystemDetailWidget-report"]}>
					<p className={styles["SystemDetailWidget-report-text"]}>
						View report
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
