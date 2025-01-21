import { useParams } from "react-router-dom";
import NavBar from "@/Features/Structural/NavBar/Navbar";
import styles from "./DetailedRisk.module.scss";
import { AgeWidget } from "@/Features/Dashboard/AgeWidget/AgeWidget";
import MainScene from "@/Features/DigitalTwin/Components/Three/MainScene";
import { CameraProvider } from "@/Features/DigitalTwin/Context/CameraContext";
// import { ConnectWatchWidget } from "@/Features/Dashboard/ConnectWatchWidget/ConnectWatchWidget";
import CtaModal from "@/Features/Dashboard/CtaModal/CtaModal";
import { ConcernsWidget } from "@/Features/Dashboard/ConcernsWidget/ConcernsWidget";
import RiskHeader from "@/Features/Structural/RiskHeader/RiskHeader";

const DetailedRisk = () => {
	const { riskName } = useParams();

	return (
		<div className={styles["DetailerRisk-layout"]}>
			<NavBar />

			<CameraProvider>
				<div className={styles["DetailerRisk-content"]}>
					<div className={`${styles["DetailerRisk-stats"]}`}>
						<RiskHeader title={riskName ?? ""} />
						{/* <StepWidget /> */}
						<AgeWidget />
						<ConcernsWidget />

						{/* <ConnectWatchWidget /> */}
					</div>
					<div className={styles["DetailerRisk-dt-container"]}>
						<div className={styles["DetailerRisk-model"]}>
							<MainScene />
						</div>
					</div>
				</div>
			</CameraProvider>
			<CtaModal />
		</div>
	);
};

export default DetailedRisk;
