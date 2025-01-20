import Drop from "@assets/ConcernsWidget/Drop.svg";
import Gene from "@assets/ConcernsWidget/Gene.svg";
import Vitals from "@assets/ConcernsWidget/Vitals.svg";

export interface Detail {
	id: number;
	title: string;
	factors: string[];
	reasons: Reason[];
	status: "High" | "Medium" | "Low";
}

export interface Reason {
	id: number;
	title: string;
	icon: string;
	test: string;
	level: number;
	value: string;
	unit: string;
	status: string;
}

export interface SystemConcerns {
	id: number;
	title: string;
	details: Detail[];
}

export const detailedSystemConcerns: SystemConcerns[] = [
	{
		id: 1,
		title: "cardiovascular",
		details: [
			{
				id: 1,
				title: "System Overview",
				factors: ["High Cholesterol level", "Other influencing factors"],
				status: "High",
				reasons: [
					{
						id: 1,
						title: "Total Cholesterol",
						icon: Drop,
						test: "Blood test",
						level: 62,
						value: "183",
						unit: "mg/dL",
						status: "Above optimal",
					},
					{
						id: 2,
						title: "Blood Pressure",
						icon: Vitals,
						test: "Vitals",
						level: 42,
						value: "132",
						unit: "mmHg",
						status: "High",
					},
					{
						id: 3,
						title: "SNP rs3739821-C",
						icon: Gene,
						test: "Genetic test",
						level: 0,
						value: "FFAR4",
						unit: "gene",
						status: "Medium pred.",
					},
					{
						id: 4,
						title: "SNP rs3739821-C",
						icon: Gene,
						test: "Genetic test",
						level: 0,
						value: "FFAR4",
						unit: "gene",
						status: "Medium pred.",
					},
				],
			},
			{
				id: 2,
				title: "Atrial Fibrillation",
				factors: ["High heart rate level", "Other influencing factors"],
				status: "High",
				reasons: [
					{
						id: 1,
						title: "Test",
						icon: Drop,
						test: "Blood test",
						level: 20,
						value: "183",
						unit: "mg/dL",
						status: "Above optimal",
					},
					{
						id: 2,
						title: "Test 2",
						icon: Vitals,
						test: "Vitals",
						level: 0,
						value: "132",
						unit: "mmHg",
						status: "High",
					},
					{
						id: 3,
						title: "Test 3",
						icon: Gene,
						test: "Genetic test",
						level: 13,
						value: "FFAR4",
						unit: "gene",
						status: "Medium pred.",
					},
					{
						id: 4,
						title: "SNP rs3739821-C",
						icon: Gene,
						test: "Genetic test",
						level: 0,
						value: "FFAR4",
						unit: "gene",
						status: "Medium pred.",
					},
				],
			},
			{
				id: 3,
				title: "Sudden Cardiac Arrest",
				factors: ["KCNQ1 mutation", "Other influencing factors"],
				status: "Medium",
				reasons: [
					{
						id: 1,
						title: "Total Cholesterol",
						icon: Drop,
						test: "Blood test",
						level: 62,
						value: "183",
						unit: "mg/dL",
						status: "Above optimal",
					},
					{
						id: 2,
						title: "Blood Pressure",
						icon: Vitals,
						test: "Vitals",
						level: 62,
						value: "132",
						unit: "mmHg",
						status: "High",
					},
					{
						id: 3,
						title: "SNP rs3739821-C",
						icon: Gene,
						test: "Genetic test",
						level: 0,
						value: "FFAR4",
						unit: "gene",
						status: "Medium pred.",
					},
					{
						id: 4,
						title: "SNP rs3739821-C",
						icon: Gene,
						test: "Genetic test",
						level: 0,
						value: "FFAR4",
						unit: "gene",
						status: "Medium pred.",
					},
				],
			},
		],
	},
];
