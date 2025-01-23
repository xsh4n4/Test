import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "@/Features/Structural/NavBar/Navbar";
import styles from "./DetailedRisk.module.scss";
import { CameraProvider } from "@/Features/DigitalTwin/Context/CameraContext";
import RiskHeader from "@/Features/Risk/RiskHeader/RiskHeader";
import { RiskStatus } from "@/Features/Risk/RiskStatus/RiskStatus";
import { AgeWidget } from "@/Features/Risk/AgeWidget/AgeWidget";
import { detailedSystemConcerns } from "@/Features/Dashboard/ConcernsWidget/helpers/detailedSystemConcerns";
import { PlanWidget } from "@/Features/Risk/PlanWidget/PlanWidget";
import GoalsProgressMenu from "@/Features/Risk/GoalProgressMenu/GoalProgressMenu";
import { ReasonsTable } from "@/Features/Risk/ReasonsTable/ReasonsTable";
import Logo from "@assets/General/IconGenetiq.svg?react";

function toTitleCase(str: string): string {
	return str
		.split(" ")
		.map(
			(word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(),
		)
		.join(" ");
}

const DetailedRisk = () => {
	const { riskName } = useParams();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const formattedName = riskName ? toTitleCase(riskName) : "";

	const handleIframeLoad = () => {
		setInterval(() => {
			setIsLoading(false);
		}, 4000);
	};

	return (
		<div className={styles["DetailerRisk-layout"]}>
			<NavBar />

			<CameraProvider>
				<div className={styles["DetailerRisk-content"]}>
					<div
						className={`${styles["DetailerRisk-stats"]} ${styles["DetailerRisk-animate"]}`}
					>
						<RiskHeader title={formattedName} />
						<RiskStatus />
						<div className={styles["DetailerRisk-age"]}>
							<div className={styles["DetailerRisk-age-content"]}>
								<div className={styles["DetailerRisk-age-content-title"]}>
									What your age tells about your health
								</div>
								<div className={styles["DetailerRisk-age-content-desc"]}>
									A younger cardiovascular age can indicate better heart health
									and potentially lower your risk of complications from AFib,
									making it essential to focus on heart health measures tailored
									to your condition.
								</div>
							</div>
							<AgeWidget />
						</div>
						<ReasonsTable
							reasons={detailedSystemConcerns[0].details[0].reasons}
						/>
						<div className={styles["DetailerRisk-plan"]}>
							<div className={styles["title"]}>What you can do</div>
							<PlanWidget />
						</div>
					</div>
					<div className={styles["DetailerRisk-twin"]}>
						<GoalsProgressMenu />
						<div
							style={{
								position: "relative",
								width: "100%",
								aspectRatio: "4 / 3",
							}}
						>
							{isLoading && (
								<div className={styles["DetailerRisk-iframe-loading"]}>
									<Logo className={styles["DetailerRisk-iframe-logo"]} />
								</div>
							)}
							<iframe
								id='embedded-human'
								frameBorder='0'
								allowFullScreen
								style={{ aspectRatio: "4 / 3", width: "100%" }}
								loading='lazy'
								onLoad={handleIframeLoad}
								src='https://human.biodigital.com/viewer/?id=5vyL&ui-anatomy-descriptions=true&ui-anatomy-pronunciations=true&ui-anatomy-labels=false&ui-audio=true&ui-chapter-list=false&ui-fullscreen=false&ui-help=false&ui-info=false&ui-label-list=true&ui-layers=false&ui-skin-layers=false&ui-loader=circle&ui-media-controls=none&ui-menu=false&ui-nav=false&ui-search=false&ui-tools=false&ui-tutorial=false&ui-undo=false&ui-whiteboard=false&initial.none=true&disable-scroll=false&dk=57a9053995a029ade6a11d83c8a64a4fedef2b19&paid=o_27f525a0'
							></iframe>
						</div>
					</div>
				</div>
			</CameraProvider>
		</div>
	);
};

export default DetailedRisk;
