import { PlanItem, PlanSection } from "../../helpers/planMockData";
import styles from "./PlanAggregate.module.scss";
import Arrow from "@assets/PlanWidget/Arrow.svg?react";
import Calendar from "@assets/PlanWidget/Calendar.svg?react";
import Shape from "@assets/PlanWidget/Shape.svg?react";
import QuestionMark from "@assets/PlanWidget/QuestionMark.svg?react";
import Document from "@assets/PlanWidget/Document.svg?react";
import doctor from "@assets/PlanWidget/doctor.png";
import { useTranslation } from "react-i18next";

type PlanAggregateProps = {
	section: PlanSection;
	setActiveTab: (title: string) => void;
	backgroundColor: string;
};

export const PlanAggregate = ({
	section,
	setActiveTab,
	backgroundColor,
}: PlanAggregateProps) => {
	const { t } = useTranslation();

	const groupedData = section.data.reduce(
		(acc: { [key: string]: PlanItem[] }, item: PlanItem) => {
			const group = item.group || "default";
			if (!acc[group]) {
				acc[group] = [];
			}
			acc[group].push(item);
			return acc;
		},
		{},
	);

	return (
		<div className={styles["PlanAggregate-container"]}>
			<div
				className={`${styles["PlanAggregate-table"]} ${backgroundColor === "blue" && styles["PlanAggregate-table-blue"]}`}
			>
				<div className={styles["PlanAggregate-note"]}>
					{t("plan.aggregate.recommendedNextSteps")}
				</div>
				{Object.keys(groupedData)
					.slice(0, 3)
					.map((groupKey) => (
						<div key={groupKey} className={styles["PlanAggregate-section"]}>
							<div className={styles["PlanAggregate-section-head"]}>
								<div className={styles["PlanAggregate-section-count"]}>
									{groupedData[groupKey].length}
								</div>
								<div className={styles["PlanAggregate-section-title"]}>
									{t(`plan.groups.${groupKey}`)}
								</div>
								<button
									className={styles["PlanAggregate-section-arrow"]}
									onClick={() => setActiveTab(groupKey)}
								>
									<Arrow />
								</button>
							</div>

							<div className={styles["PlanAggregate-rows"]}>
								{groupedData[groupKey].slice(0, 3).map((item, id) => (
									<div key={id} className={styles["PlanAggregate-row"]}>
										<div className={styles["PlanAggregate-row-icon-container"]}>
											<img
												src={item.icon}
												alt={t(item.name)}
												className={styles["PlanAggregate-row-icon"]}
											/>
										</div>
										<div className={styles["PlanAggregate-row-name"]}>
											{t(item.name)}
										</div>
										<div className={styles["PlanAggregate-row-type"]}>
											{t("plan.aggregate.activity")}
										</div>
										<div className={styles["PlanAggregate-buttons"]}>
											<div className={styles["PlanAggregate-why"]}>
												<p>{t("plan.aggregate.why")}</p>
												<QuestionMark />
											</div>

											<button className={styles["PlanAggregate-cart"]}>
												<p>{t("plan.aggregate.addToCart")}</p>
												<Document />
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
			</div>

			<div className={styles["PlanAggregate-or"]}>{t("plan.aggregate.or")}</div>
			<div className={styles["PlanAggregate-cta"]}>
				<div className={styles["PlanAggregate-cta-icon-container"]}>
					<img src={doctor} alt={t("plan.aggregate.doctorIconAlt")} />
				</div>
				<div className={styles["PlanAggregate-cta-body"]}>
					<div className={styles["PlanAggregate-cta-title"]}>
						{t("plan.aggregate.checkInWithPhysician")}
						<Shape className={styles["PlanAggregate-cta-shape"]} />
					</div>
					<div className={styles["PlanAggregate-cta-desc"]}>
						{t("plan.aggregate.consultSpecialist")}
					</div>
				</div>
				<button className={styles["PlanAggregate-cta-button"]}>
					<p className={styles["PlanAggregate-cta-schedule"]}>
						{t("plan.aggregate.scheduleCall")}
					</p>
					<div className={styles["PlanAggregate-cta-schedule-icon"]}>
						<Calendar />
					</div>
				</button>
			</div>
		</div>
	);
};
