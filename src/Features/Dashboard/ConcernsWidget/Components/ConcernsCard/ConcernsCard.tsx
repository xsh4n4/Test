import { useTranslation } from "react-i18next";
import styles from "./ConcernsCard.module.scss";
import { Concern } from "../../helpers/concernsMockData";
import Question from "@assets/ConcernsWidget/Question.svg?react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "@/App/Redux/categorySlice";

interface ConcernsCardProps {
	concern: Concern;
	backgroundColor?: string;
}

export const ConcernsCard: React.FC<ConcernsCardProps> = ({
	concern,
	backgroundColor,
}) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = (concernName: string) => {
		dispatch(setCategory("cardiovascular"));
		setTimeout(() => {
			navigate(`/dashboard/cardiovascular/${concernName}`);
		}, 100);
	};

	return (
		<div
			className={`${styles["ConcernsCard-card"]} ${
				concern.link && styles["ConcernsCard-card-link"]
			} ${backgroundColor === "blue" && styles["ConcernsCard-card-blue"]}`}
			onClick={() => handleClick(concern.title)}
		>
			<div className={styles["ConcernsCard-head"]}>
				<div className={styles["ConcernsCard-icon-container"]}>
					<img
						src={concern.icon}
						alt={`${t(concern.title)} ${t("common.icon")}`}
					/>
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
						{t(`concerns.status.${concern.status.toLowerCase()}`)}
					</div>
				</div>
			</div>
			<div className={styles["ConcernsCard-body"]}>
				<div className={styles["ConcernsCard-body-title"]}>
					{t(concern.title)}
				</div>
				<div className={styles["ConcernsCard-body-description"]}>
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
							{t(concern.factors[0])}
						</span>
						{concern.factors.length > 1 && (
							<span>
								{" "}
								{t("concerns.levelAndOtherFactors", {
									count: concern.factors.length - 1,
								})}
							</span>
						)}
					</>
				</div>
			</div>
			<div className={styles["DetailsCard-question-container"]}>
				<Question className={styles["DetailsCard-question"]} />
			</div>
		</div>
	);
};
