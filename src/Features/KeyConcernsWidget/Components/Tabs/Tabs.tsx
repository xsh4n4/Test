import { useState } from "react";
import styles from "./Tabs.module.scss";

const TABS = ["Action Plan", "Supplements", "Follow-up Care", "Lifestyle"];

export const Tabs = () => {
	const [activeTab, setActiveTab] = useState(TABS[1]);

	return (
		<div className={styles["Tabs-container"]}>
			<div className={styles["Tabs-tabs"]}>
				{TABS.map((tab) => (
					<button
						key={tab}
						className={`${styles["Tabs-tab"]} ${
							activeTab === tab ? styles["active"] : ""
						}`}
						onClick={() => setActiveTab(tab)}
					>
						{tab}
					</button>
				))}
			</div>
			<div className={styles["Tabs-content"]}>
				{activeTab === "Action Plan" && <div>Action Plan Content</div>}
				{activeTab === "Supplements" && <div>Supplements Content</div>}
				{activeTab === "Follow-up Care" && <div>Follow-up Care Content</div>}
				{activeTab === "Lifestyle" && <div>Lifestyle Content</div>}
			</div>
		</div>
	);
};
