import { useState } from "react";
import { planMockData } from "./helpers/planMockData";
import styles from "./PlanWidget.module.scss";
import { Tabs } from "./Components/Tabs/Tabs";
import { PlanTable } from "./Components/PlanTable/PlanTable";

export const PlanWidget = () => {
	const [activeTab, setActiveTab] = useState(planMockData[0].title);

	return (
		<div className={styles["PlanWidget-wrapper"]}>
			<Tabs
				sections={planMockData}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<div className={styles["PlanWidget-content"]}>
				{planMockData
					.filter((section) => section.title === activeTab)
					.map((section, index) => (
						<PlanTable
							section={section}
							setActiveTab={setActiveTab}
							key={index}
						/>
					))}
			</div>
		</div>
	);
};
