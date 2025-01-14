import NavBar from "@/Features/NavBar/Navbar";
import styles from "./Dashboard.module.scss";
import { TrackerWidget } from "@/Features/TrackerWidget/TrackerWidget";
import { AgeWidget } from "@/Features/AgeWidget/AgeWidget";

const Dashboard = () => {
	return (
		<div className={styles["Dashboard-layout"]}>
			<NavBar />
			<div className={styles["Dashboard-content"]}>
				<div className={styles["Dashboard-model"]}></div>
				<div className={styles["Dashboard-stats"]}>
					<TrackerWidget />
					<AgeWidget />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
