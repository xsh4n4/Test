import NavBar from "@/Features/NavBar/Navbar";
import styles from "./Dashboard.module.scss";
import { TrackerWidget } from "@/Features/TrackerWidget/TrackerWidget";
import { AgeWidget } from "@/Features/AgeWidget/AgeWidget";
import MainScene from "@/Features/NavBar/Components/Three/MainScene";
import { CameraProvider } from "@/Features/DigitalTwin/Context/CameraContext";
import { ConnectWatchWidget } from "@/Features/ConnectWatchWidget/ConnectWatchWidget";
import { useState } from "react";
import CtaModal from "@/Features/CtaModal/CtaModal";
import { ConcernsWidget } from "@/Features/ConcernsWidget/ConcernsWidget";
import { PlanWidget } from "@/Features/PlanWidget/PlanWidget";

const Dashboard = () => {
	const [animate, setAnimate] = useState(false);

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
					<div
						className={`${styles["Dashboard-stats"]} ${animate && styles["animate"]}`}
					>
						<button onClick={() => setAnimate(!animate)}>
							{animate ? "Reset" : "Animate Widgets"}
						</button>
						<TrackerWidget />
						<AgeWidget />
						<ConcernsWidget />
						<PlanWidget />
						<ConnectWatchWidget />
					</div>
				</div>
			</CameraProvider>
			<CtaModal />
		</div>
	);
};

export default Dashboard;
