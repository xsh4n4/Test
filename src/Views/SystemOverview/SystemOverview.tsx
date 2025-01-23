import { useParams } from "react-router-dom";
import NavBar from "@/Features/Structural/NavBar/Navbar";
import styles from "./SystemOverview.module.scss";
import { AgeWidget } from "@/Features/Dashboard/AgeWidget/AgeWidget";
import MainScene from "@/Features/DigitalTwin/Components/Three/MainScene";
import { CameraProvider } from "@/Features/DigitalTwin/Context/CameraContext";
// import CtaModal from "@/Features/Dashboard/CtaModal/CtaModal";
import { ConcernsWidget } from "@/Features/Dashboard/ConcernsWidget/ConcernsWidget";
import { Link } from "react-router-dom";

const SystemOverview = () => {
	const { systemName } = useParams();
	return (
		<div className={styles["SystemOverview-layout"]}>
			<NavBar />
			<CameraProvider>
				<div className={styles["SystemOverview-content"]}>
					<div className={styles["SystemOverview-stats"]}>
						<Link to='/dashboard'>Back Home</Link>
						<h1 className={styles["SystemOverview-title"]}>{systemName}</h1>
						<AgeWidget />
						<ConcernsWidget category={"total"} />
					</div>
					<div className={styles["SystemOverview-dt-container"]}>
						<div className={styles["SystemOverview-model"]}>
							<MainScene />
						</div>
					</div>
				</div>
			</CameraProvider>
			{/* <CtaModal /> */}
		</div>
	);
};
export default SystemOverview;
