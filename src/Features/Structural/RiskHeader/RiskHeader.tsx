import styles from "./RiskHeader.module.scss";
import Grid from "@assets/General/Grid.svg?react";
import Cardio from "@assets/RiskHeader/CardioLight.svg?react";

const RiskHeader = (props: { title: string }) => {
	return (
		<div className={styles["RiskHeader-layout"]}>
			<div className={styles["RiskHeader-layout-title"]}>
				<h2 className={styles["RiskHeader-layout-title-p"]}>{props.title}</h2>
			</div>
			<div className={styles["RiskHeader"]}>
				<div className={styles["RiskHeader-wrapper"]}>
					<div style={{ paddingRight: "4px", display: "flex", height: 16 }}>
						<Grid style={{ padding: 2 }} />
					</div>
					<p className={styles["RiskHeader-category-p"]}>Category</p>
					<p className={styles["RiskHeader-category-val-p"]}>
						Cardiovascular disorders
					</p>
				</div>
				<div className={styles["RiskHeader-wrapper"]}>
					<div style={{ paddingRight: "4px", display: "flex" }}>
						<Cardio style={{ padding: 2 }} />
					</div>
					<p className={styles["RiskHeader-category-p"]}>Key organs</p>
					<p className={styles["RiskHeader-category-val-p"]}>Heart</p>
				</div>
			</div>
			<p className={styles["RiskHeader-description-p"]}>
				AFib is a common heart rhythm disorder characterized by irregular and
				often rapid heartbeats, leading to an increased risk of stroke, heart
				failure, and other cardiovascular complications.{" "}
			</p>
			<p className={styles["RiskHeader-description-p"]}>
				Atrial fibrillation affects millions of people worldwide and is often
				influenced by a combination of genetic predisposition and environmental
				factors.
			</p>
			<p className={styles["RiskHeader-description-p"]}>
				Variations in genes encoding ion channels, structural proteins, and
				signaling molecules involved in cardiac electrical conduction and
				contractility contribute to the development of AFib. Common genetic risk
				factors include mutations in the KCNE1, KCNH2, and SCN5A genes, which
				regulate potassium and sodium channels crucial for maintaining normal
				heart rhythm.
			</p>
		</div>
	);
};

export default RiskHeader;
