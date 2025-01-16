import Chevron from "@assets/ConcernWidget/Chevron.svg?react";
import LightBulb from "@assets/ConcernWidget/LightBulb.svg?react";
import Report from "@assets/ConcernWidget/Page.svg?react";

import styles from "./SystemReport.module.scss";

interface SystemReportProps {
	system: {
		system: string;
		icon: string;
		concerns: { label: string; status: string }[];
	};
	index: number;
	toggleOpenRow: (index: number) => void;
	isOpen: boolean;
}

export const SystemReport: React.FC<SystemReportProps> = ({
	system,
	index,
	toggleOpenRow,
	isOpen,
}) => {
	return (
		<div className={styles["ConcernWidget-row"]}>
			<div
				className={styles["ConcernWidget-row-head"]}
				onClick={() => toggleOpenRow(index)}
			>
				<div className={styles["ConcernWidget-system"]}>
					<div className={styles["ConcernWidget-system-icon"]}>
						<img src={system.icon} alt={`${system.system} icon`} />
					</div>
					<div className={styles["ConcernWidget-system-title"]}>
						{system.system}
					</div>
				</div>
				<div className={styles["ConcernWidget-row-buttons"]}>
					{isOpen ? (
						<div className={styles["ConcernWidget-report"]}>
							<div className={styles["ConcernWidget-report-icon-container"]}>
								<Report />
							</div>
							View Report
						</div>
					) : (
						<div className={styles["ConcernWidget-notifs"]}>
							<div className={styles["ConcernWidget-bulb-container"]}>
								<LightBulb className={styles["ConcernWidget-bulb"]} />
							</div>
							<div className={styles["ConcernWidget-notif-number"]}>
								{system.concerns.length}
							</div>
						</div>
					)}
					<div
						className={`${styles["ConcernWidget-big-chevron-container"]} ${
							isOpen ? styles["rotate-chevron"] : ""
						}`}
					>
						<Chevron className={styles["ConcernWidget-big-chevron"]} />
					</div>
				</div>
			</div>

			<div
				className={`${styles["ConcernWidget-concerns-container"]} ${
					isOpen ? styles["expand"] : styles["collapse"]
				}`}
			>
				<div className={styles["ConcernWidget-concerns"]}>
					{system.concerns.map((concern, i) => (
						<div
							key={i}
							className={`${styles["ConcernWidget-concern"]} ${
								concern.status === "High"
									? styles["ConcernWidget-concern-high"]
									: concern.status === "Medium"
										? styles["ConcernWidget-concern-medium"]
										: styles["ConcernWidget-concern-low"]
							}`}
						>
							<span className={styles["ConcernWidget-concern-label"]}>
								{concern.label}
							</span>
							<span
								className={`${styles["ConcernWidget-concern-status"]} ${
									concern.status === "High"
										? styles["ConcernWidget-high"]
										: concern.status === "Medium"
											? styles["ConcernWidget-medium"]
											: styles["ConcernWidget-low"]
								}`}
							>
								{concern.status}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
