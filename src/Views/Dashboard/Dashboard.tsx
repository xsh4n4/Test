import NavBar from "@/Features/NavBar/Navbar";
import styles from "./Dashboard.module.scss";
import { TrackerWidget } from "@/Features/TrackerWidget/TrackerWidget";
import { AgeWidget } from "@/Features/AgeWidget/AgeWidget";
import Sidebar from "@/Features/NavBar/Components/Navigation/SideBar/SideBar";
import MainScene from "@/Features/NavBar/Components/Three/MainScene";
import { CameraProvider } from "@/Features/DigitalTwin/Context/CameraContext";

const Dashboard = () => {
	return (
		<div className={styles["Dashboard-layout"]}>
			<NavBar />
			<div className={styles["Dashboard-select"]}></div>
			<CameraProvider>
				<div className={styles["Dashboard-content"]}>
					<div className={styles["Dashboard-sidebar"]}>
						<Sidebar />
					</div>
					<div className={styles["Dashboard-model"]}>
						<MainScene />
					</div>
					<div className={styles["Dashboard-stats"]}>
						<TrackerWidget />
						<AgeWidget />
					</div>
				</div>
			</CameraProvider>
		</div>
	);
};

export default Dashboard;
