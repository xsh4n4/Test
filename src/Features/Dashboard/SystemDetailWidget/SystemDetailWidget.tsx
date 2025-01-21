import styles from "./SystemDetailWidget.module.scss";
import Report from "@assets/SystemDetailWidget/Report.svg?react";
import { systemDetailMockData } from "./helpers/systemDetailMockData";
import { useEffect, useState } from "react";

interface SystemDetailWidgetProps {
	category: string;
}

export const SystemDetailWidget: React.FC<SystemDetailWidgetProps> = ({
	category,
}) => {
	const [detail, setDetail] = useState({
		title: "",
		description: "No details available.",
	});

	useEffect(() => {
		console.log(category);
		if (category !== "total") {
			setDetail(systemDetailMockData[0]);
		}
	}, [category]);

	return (
		<div
			className={`${styles["SystemDetailWidget-container"]} ${category === "total" && styles["SystemDetailWidget-container-hidden"]}`}
			// onAnimationStart={handleAnimationStart}
		>
			<div className={styles["SystemDetailWidget-head"]}>
				<h3 className={styles["SystemDetailWidget-title"]}>{detail.title}</h3>
				<div className={styles["SystemDetailWidget-report"]}>
					<p className={styles["SystemDetailWidget-report-text"]}>
						View report {category}
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
