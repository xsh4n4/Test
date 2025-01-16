export type ConcernStatus = "High" | "Medium" | "Low";

export interface Concern {
	id: number;
	title: string;
	result: string;
	status: ConcernStatus;
	system: string;
}

export const concernsMock: Concern[] = [
	{
		id: 1,
		title: "Rising Blood Pressure",
		result: "148/92 mmHg (Hypertension Stage 1)",
		status: "High",
		system: "Cardiovascular System",
	},
	{
		id: 2,
		title: "High Cholesterol Levels",
		result: "160 mg/dL (Borderline high, contributing to risk)",
		status: "Medium",
		system: "Cardiovascular System",
	},
	{
		id: 3,
		title: "Vitamin D Deficiency",
		result: "145/90 mmHg (above normal range)",
		status: "High",
		system: "Cardiovascular System",
	},
	{
		id: 4,
		title: "Elevated Blood Glucose",
		result: "112 mg/dL (Pre-diabetes level)",
		status: "Medium",
		system: "Endocrine System",
	},
	{
		id: 5,
		title: "Low Iron Levels",
		result: "8 µg/dL (Iron deficiency anemia)",
		status: "High",
		system: "Hematologic System",
	},
	{
		id: 6,
		title: "Mild Liver Enzyme Elevation",
		result: "ALT: 50 U/L (Slightly elevated)",
		status: "Low",
		system: "Hepatic System",
	},
	{
		id: 7,
		title: "Elevated Uric Acid",
		result: "8.2 mg/dL (Risk for gout)",
		status: "Medium",
		system: "Renal System",
	},
	{
		id: 8,
		title: "Abnormal Thyroid Function",
		result: "TSH: 6.8 mIU/L (Mild hypothyroidism)",
		status: "Medium",
		system: "Endocrine System",
	},
	{
		id: 9,
		title: "Reduced Lung Capacity",
		result: "FEV1: 70% of predicted (Early COPD signs)",
		status: "High",
		system: "Respiratory System",
	},
];
