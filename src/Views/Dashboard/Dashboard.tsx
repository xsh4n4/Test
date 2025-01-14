import NavBar from "@/Features/NavBar/Navbar";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
	return (
		<div className={styles["Dashboard-layout"]}>
			<NavBar />
			<div className={styles["Dashboard-content"]}></div>
		</div>
	);
};

export default Dashboard;
