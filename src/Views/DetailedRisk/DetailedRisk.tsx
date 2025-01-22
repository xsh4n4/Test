import { useNavigate, useParams } from "react-router-dom";
import NavBar from "@/Features/Structural/NavBar/Navbar";
import styles from "./DetailedRisk.module.scss";
import { CameraProvider } from "@/Features/DigitalTwin/Context/CameraContext";
import RiskHeader from "@/Features/Structural/RiskHeader/RiskHeader";
import GoalsProgress from "@features/Structural/GoalProgressMenu/GoalProgressMenu.tsx";

function toTitleCase(str: string): string {
	return str
		.split(" ")
		.map(
			(word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(),
		)
		.join(" ");
}

const DetailedRisk = () => {
	const navigate = useNavigate();
	const { riskName } = useParams();

	const formattedName = riskName ? toTitleCase(riskName) : "";

	return (
		<div className={styles["DetailerRisk-layout"]}>
			<NavBar />

			<CameraProvider>
				<div className={styles["DetailerRisk-content"]}>
					<div className={styles["DetailerRisk-stats"]}>
						<nav
							style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
						>
							<span
								onClick={() => navigate(-1)}
								style={{ cursor: "pointer" }}
								className={styles.homeIcon}
							>
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M8.30615 1.10687C8.2174 1.03762 8.10805 1 7.99547 1C7.8829 1 7.77355 1.03762 7.6848 1.10687L0.5 6.70967L1.12135 7.49552L2 6.81042V13C2.00054 13.265 2.10607 13.5191 2.29349 13.7065C2.48091 13.8939 2.73495 13.9994 3 14H13C13.2651 13.9995 13.5191 13.894 13.7066 13.7065C13.894 13.5191 13.9995 13.265 14 13V6.81497L14.8786 7.49997L15.5 6.71407L8.30615 1.10687ZM9 13H7V8.99997H9V13ZM10 13V8.99997C9.9997 8.73485 9.89424 8.48067 9.70677 8.2932C9.5193 8.10573 9.26512 8.00028 9 7.99997H7C6.73486 8.00024 6.48066 8.10568 6.29319 8.29316C6.10571 8.48064 6.00026 8.73484 6 8.99997V13H3V6.03072L8 2.13572L13 6.03597V13H10Z'
										fill='#3B8DF5'
									/>
								</svg>
							</span>
							<span
								onClick={() => navigate(-1)}
								className={styles.breadcrumbs}
								style={{
									cursor: "pointer",
									color: "rgba(59, 141, 245, 1)",
								}}
							>
								/ Cardiovascular Disease
							</span>

							<span className={styles.breadcrumbs}> / Concern report</span>
						</nav>

						<RiskHeader title={formattedName} />
					</div>
					<GoalsProgress />
				</div>
			</CameraProvider>
		</div>
	);
};

export default DetailedRisk;
