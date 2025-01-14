import NavBar from "@/Features/NavBar/Navbar";
import styles from "./Dashboard.module.scss";
import { TrackerWidget } from "@/Features/TrackerWidget/TrackerWidget";

const Dashboard = () => {
	return (
		<div className={styles["Dashboard-layout"]}>
			<NavBar />
			<div className={styles["Dashboard-content"]}>
				<div className={styles["Dashboard-model"]}></div>
				<div className={styles["Dashboard-stats"]}>
					<TrackerWidget />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
