import React from "react";
import { useTranslation } from "react-i18next";
import { Detail } from "../../helpers/detailedSystemConcerns";
import styles from "./DetailsCard.module.scss";
import Check from "@assets/ConcernsWidget/Check.svg?react";
import Question from "@assets/ConcernsWidget/Question.svg?react";

interface DetailsCardProps {
	detail: Detail;
	detailIndex: number;
	setDetailIndex: (id: number) => void;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
	detail,
	detailIndex,
	setDetailIndex,
}) => {
	const { t } = useTranslation();

	return (
		<div
			className={`${styles["DetailsCard-card"]} ${detail.id === detailIndex && styles["DetailsCard-card-active"]}`}
			onClick={() => setDetailIndex(detail.id)}
		>
			<div className={styles["DetailsCard-head"]}>
				<div
					className={`${styles["DetailsCard-status"]} ${
						detail.status === "High"
							? styles["DetailsCard-status-red"]
							: detail.status === "Medium"
								? styles["DetailsCard-status-orange"]
								: styles["DetailsCard-status-green"]
					}`}
				>
					<div className={styles["DetailsCard-status-exclamation"]}>!</div>
					<div className={styles["DetailsCard-status-text"]}>
						{t(`concerns.status.${detail.status.toLowerCase()}`)}
					</div>
				</div>
				<label className={styles["DetailsCard-checkbox-container"]}>
					<input
						type='checkbox'
						checked={detail.id === detailIndex}
						onChange={() => setDetailIndex(detail.id)}
						className={styles["DetailsCard-checkbox"]}
					/>
					<span className={styles["DetailsCard-custom-checkbox"]}>
						{detail.id === detailIndex && <Check />}
					</span>
				</label>
			</div>
			<div className={styles["DetailsCard-body"]}>
				<div className={styles["DetailsCard-body-title"]}>
					{t(detail.title)}
				</div>
				<div className={styles["DetailsCard-body-description"]}>
					<>
						<span
							className={`${styles["DetailsCard-highlight"]} ${
								detail.status === "High"
									? styles["DetailsCard-highlight-red"]
									: detail.status === "Medium"
										? styles["DetailsCard-highlight-orange"]
										: styles["DetailsCard-highlight-green"]
							}`}
						>
							{t(detail.factors[0])}
						</span>
						{detail.factors.length > 1 && (
							<span>
								{" "}
								{t("concerns.levelAndOtherFactors", {
									count: detail.factors.length - 1,
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
