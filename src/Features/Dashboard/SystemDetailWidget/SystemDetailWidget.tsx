import { useTranslation } from "react-i18next";
import styles from "./SystemDetailWidget.module.scss";
import Report from "@assets/SystemDetailWidget/Report.svg?react";
import { systemDetailMockData } from "./helpers/systemDetailMockData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/App/Redux/store";

interface SystemDetailWidgetProps {
	category: string;
}

export const SystemDetailWidget: React.FC<SystemDetailWidgetProps> = ({
	category,
}) => {
	const { t } = useTranslation();
	const [detail, setDetail] = useState({
		title: "",
		description: "systemDetail.noDetails",
	});

	const navigate = useNavigate();
	const selectedCategory = useSelector(
		(state: RootState) => state.category.selectedCategory,
	);

	useEffect(() => {
		if (category !== "total") {
			setDetail(systemDetailMockData[0]);
		} else {
			setDetail({
				title: "",
				description: "systemDetail.noDetails",
			});
		}
	}, [category]);

	const ViewReport = () => {
		navigate(`/dashboard/${selectedCategory}`);
	};

	return (
		<div
			className={`${styles["SystemDetailWidget-container"]} ${
				category === "total" && styles["SystemDetailWidget-container-hidden"]
			}`}
		>
			<div className={styles["SystemDetailWidget-head"]}>
				<h3 className={styles["SystemDetailWidget-title"]}>
					{t(detail.title || "systemDetail.noDetails")}
				</h3>
				<div className={styles["SystemDetailWidget-report"]}>
					<button
						className={styles["SystemDetailWidget-report-text"]}
						onClick={ViewReport}
					>
						{t("systemDetail.viewReport")}
						<Report />
					</button>
				</div>
			</div>
			<p className={styles["SystemDetailWidget-body"]}>
				{t(detail.description)}
			</p>
		</div>
	);
};
