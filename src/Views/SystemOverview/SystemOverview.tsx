import { useParams } from "react-router-dom";
import NavBar from "@/Features/Structural/NavBar/Navbar";
import styles from "./SystemOverview.module.scss";
import { AgeWidget } from "@/Features/Dashboard/AgeWidget/AgeWidget";
import MainScene from "@/Features/DigitalTwin/Components/Three/MainScene";
import { CameraProvider } from "@/Features/DigitalTwin/Context/CameraContext";
import { Link } from "react-router-dom";
import { ReasonsTable } from "@/Features/Dashboard/ConcernsWidget/Components/ReasonsTable/ReasonsTable";
import { detailedSystemConcerns } from "@/Features/Dashboard/ConcernsWidget/helpers/detailedSystemConcerns";
import { PlanWidget } from "@/Features/Dashboard/PlanWidget/PlanWidget";
import { ConcernsCard } from "@/Features/Dashboard/ConcernsWidget/Components/ConcernsCard/ConcernsCard";
import { useState } from "react";
import { concernsMockData } from "@/Features/Dashboard/ConcernsWidget/helpers/concernsMockData";
import Chevron from "@assets/ConcernWidget/Chevron.svg?react";
import ArrowLeft from "@assets/General/ArrowLeft.svg?react";

const SystemOverview = () => {
	const { systemName } = useParams();
	const [isShowMore, setIsShowMore] = useState(false);

	const concernsToShow = isShowMore
		? concernsMockData
		: concernsMockData.slice(0, 2);
	return (
		<div className={styles["SystemOverview-layout"]}>
			<NavBar />
			<CameraProvider>
				<div className={styles["SystemOverview-content"]}>
					<div className={styles["SystemOverview-stats"]}>
						<div className={styles["SystemOverview-head"]}>
							<Link to='/dashboard' className={styles["SystemOverview-back"]}>
								<ArrowLeft />
								Back Home
							</Link>
							<h1 className={styles["SystemOverview-title"]}>{systemName}</h1>
						</div>
						<div className={styles["SystemOverview-widget-wrapper"]}>
							<div className={styles["SystemOverview-widget-head"]}>
								<h4 className={styles["SystemOverview-widget-title"]}>
									What your age tells about your health
								</h4>
								<p className={styles["SystemOverview-widget-desc"]}>
									A younger cardiovascular age can indicate better heart health
									and potentially lower your risk of complications from AFib,
									making it essential to focus on heart health measures tailored
									to your condition.
								</p>
							</div>
							<AgeWidget />
						</div>
						<div className={styles["SystemOverview-widget-wrapper"]}>
							<div className={styles["SystemOverview-widget-head"]}>
								<div className={styles["SystemOverview-widget-title-wrapper"]}>
									<h4 className={styles["SystemOverview-widget-title"]}>
										Key areas of concern
									</h4>
									<div>
										<div
											className={styles["SystemOverview-more"]}
											onClick={() => setIsShowMore((prev) => !prev)}
										>
											<p className={styles["SystemOverview-more-text"]}>
												{isShowMore ? "Show Less" : "Show all"}
											</p>
											<div
												className={styles["SystemOverview-chevron-container"]}
											>
												<Chevron
													className={`${styles["SystemOverview-chevron"]} ${
														isShowMore ? styles["rotate-chevron"] : ""
													}`}
												/>
											</div>
										</div>
									</div>
								</div>
								<p className={styles["SystemOverview-widget-desc"]}>
									Based on the provided data and individual disease
									recommendations, the patient is at risk for several
									cardiovascular conditions, including:
								</p>
							</div>
							<div className={styles["SystemOverview-concern-cards"]}>
								{concernsToShow.map((concern) => (
									<ConcernsCard key={concern.id} concern={concern} type='row' />
								))}
							</div>
						</div>
						<div className={styles["SystemOverview-widget-wrapper"]}>
							<div className={styles["SystemOverview-widget-head"]}>
								<h4
									className={`${styles["SystemOverview-widget-title"]} ${styles["padding-top"]}`}
								>
									How we known this
								</h4>
								<p className={styles["SystemOverview-widget-desc"]}>
									The primary concerns are elevated LDL cholesterol levels,
									slightly below optimal HDL cholesterol, and the need for
									improved cardiovascular fitness and stress management.
								</p>
							</div>
							<ReasonsTable
								reasons={detailedSystemConcerns[0].details[0].reasons}
								detailIndex={1}
							/>
						</div>
						<div className={styles["SystemOverview-widget-wrapper"]}>
							<div className={styles["SystemOverview-widget-head"]}>
								<h4
									className={`${styles["SystemOverview-widget-title"]} ${styles["padding-top"]}`}
								>
									What you can do
								</h4>
								<p className={styles["SystemOverview-widget-desc"]}>
									The following comprehensive action plan combines lifestyle
									changes, monitoring strategies, and supplement recommendations
									to support overall cardiovascular health.
								</p>
								<p className={styles["SystemOverview-widget-desc"]}>
									By following this comprehensive action plan, you can
									effectively manage cardiovascular risk factors, improve heart
									health, and reduce the likelihood of disease progression.
									Regular monitoring and lifestyle adjustments will play a
									crucial role in maintaining optimal cardiovascular health and
									overall well-being.
								</p>
							</div>
							<PlanWidget backgroundColor='blue' />
						</div>
					</div>
					<div className={styles["SystemOverview-dt-container"]}>
						<div className={styles["SystemOverview-model"]}>
							<MainScene />
						</div>
					</div>
				</div>
			</CameraProvider>
		</div>
	);
};
export default SystemOverview;
