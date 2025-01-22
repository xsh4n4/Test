import { useParams } from "react-router-dom";
import NavBar from "@/Features/Structural/NavBar/Navbar";
import styles from "./DetailedRisk.module.scss";
import { CameraProvider } from "@/Features/DigitalTwin/Context/CameraContext";
import RiskHeader from "@/Features/Structural/RiskHeader/RiskHeader";
import GoalsProgress from "@features/Structural/GoalProgressMenu/GoalProgressMenu.tsx";

const DetailedRisk = () => {
	const { riskName } = useParams();

	return (
		<div className={styles["DetailerRisk-layout"]}>
			<NavBar />

			<CameraProvider>
				<div className={styles["DetailerRisk-content"]}>
					<div className={`${styles["DetailerRisk-stats"]}`}>
						<RiskHeader title={riskName ?? ""} />
					</div>
					<GoalsProgress />
				</div>
			</CameraProvider>
		</div>
	);
};

export default DetailedRisk;
