import styles from "./RiskHeader.module.scss";
import ArrowRight from "@assets/General/ArrowLeft.svg?react";
import Grid from "@assets/General/Grid.svg?react";
import Cardio from "@assets/RiskHeader/CardioLight.svg?react";

const RiskHeader = (props: { title: string }) => {
	return (
		<div className={styles["RiskHeader-layout"]}>
			<div className={styles["RiskHeader-layout-title"]}>
				<button className={styles["icon-button"]}>
					<ArrowRight />
				</button>
				<h2 className={styles["RiskHeader-layout-title-p"]}>{props.title}</h2>
			</div>
			<div className={styles["RiskHeader"]}>
				<div style={{ paddingRight: "4px", display: "flex", height: 16 }}>
					<Grid style={{ padding: 2 }} />
				</div>
				<p className={styles["RiskHeader-category-p"]}>Category</p>

				<p className={styles["RiskHeader-category-val-p"]}>
					Cardiovascular disorders
				</p>
				<div style={{ paddingRight: "4px", display: "flex" }}>
					<Cardio style={{ padding: 2 }} />
				</div>
				<p className={styles["RiskHeader-category-p"]}>Key organs</p>
				<p className={styles["RiskHeader-category-val-p"]}>Heart</p>
			</div>
			<p className={styles["RiskHeader-description-p"]}>
				AFib is a common heart rhythm disorder characterized by irregular and
				often rapid heartbeats, leading to an increased risk of stroke, heart
				failure, and other cardiovascular complications.{" "}
				<span className={styles["RiskHeader-description-span"]}>Show more</span>
			</p>
		</div>
	);
};

export default RiskHeader;
