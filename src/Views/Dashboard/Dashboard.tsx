import NavBar from "@/Features/Structural/NavBar/Navbar";
import styles from "./Dashboard.module.scss";
import { TrackerWidget } from "@/Features/Dashboard/TrackerWidget/TrackerWidget";
import { AgeWidget } from "@/Features/Dashboard/AgeWidget/AgeWidget";
import MainScene from "@/Features/DigitalTwin/Components/Three/Scene/MainScene";
import { CameraProvider } from "@/Features/DigitalTwin/Context/CameraContext";
// import { ConnectWatchWidget } from "@/Features/Dashboard/ConnectWatchWidget/ConnectWatchWidget";
import CtaModal from "@/Features/Dashboard/CtaModal/CtaModal";
import { ConcernsWidget } from "@/Features/Dashboard/ConcernsWidget/ConcernsWidget";
import { PlanWidget } from "@/Features/Dashboard/PlanWidget/PlanWidget";
import { SystemDetailWidget } from "@/Features/Dashboard/SystemDetailWidget/SystemDetailWidget";

const Dashboard = () => {
	return (
		<div className={styles["Dashboard-layout"]}>
			<NavBar />
			<div className={styles["Dashboard-select"]}></div>
			<CameraProvider>
				<div className={styles["Dashboard-content"]}>
					<div className={styles["Dashboard-dt-container"]}>
						<div className={styles["Dashboard-model"]}>
							<MainScene />
						</div>
					</div>
					<div className={`${styles["Dashboard-stats"]} `}>
						{/* <button onClick={() => setAnimate(!animate)}>
							{animate ? "Reset" : "Animate Widgets"}
						</button> */}
						<SystemDetailWidget />
						<TrackerWidget />
						<AgeWidget />
						<ConcernsWidget />
						<PlanWidget />
						{/* <ConnectWatchWidget /> */}
					</div>
				</div>
			</CameraProvider>
			<CtaModal />
		</div>
	);
};

export default Dashboard;
