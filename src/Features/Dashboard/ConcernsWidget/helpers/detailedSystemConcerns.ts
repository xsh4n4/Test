import Drop from "@assets/ConcernsWidget/Drop.svg";
import Gene from "@assets/ConcernsWidget/Gene.svg";
import Vitals from "@assets/ConcernsWidget/Vitals.svg";

export interface Detail {
	id: number;
	title: string;
	factors: string[];
	reasons: Reason[];
	symptoms?: Symptoms;
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
	description: string;
	date: string;
}

export interface Symptoms {
	id: number;
	description: string;
	symptomsList: string[];
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
						description:
							'Total cholesterol/HDL ratio: Assesses cardiovascular risk by comparing total cholesterol to "good" HDL cholesterol.',
						date: "01.07.24",
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
						description:
							'Total cholesterol/HDL ratio: Assesses cardiovascular risk by comparing total cholesterol to "good" HDL cholesterol.',
						date: "Today",
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
						description:
							'Total cholesterol/HDL ratio: Assesses cardiovascular risk by comparing total cholesterol to "good" HDL cholesterol.',
						date: "2d ago",
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
						description:
							'Total cholesterol/HDL ratio: Assesses cardiovascular risk by comparing total cholesterol to "good" HDL cholesterol.',
						date: "03.07.24",
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
						description:
							'Total cholesterol/HDL ratio: Assesses cardiovascular risk by comparing total cholesterol to "good" HDL cholesterol.',
						date: "01.07.24",
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
						description:
							'Total cholesterol/HDL ratio: Assesses cardiovascular risk by comparing total cholesterol to "good" HDL cholesterol.',
						date: "01.07.24",
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
						description:
							'Total cholesterol/HDL ratio: Assesses cardiovascular risk by comparing total cholesterol to "good" HDL cholesterol.',
						date: "01.07.24",
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
						description:
							'Total cholesterol/HDL ratio: Assesses cardiovascular risk by comparing total cholesterol to "good" HDL cholesterol.',
						date: "01.07.24",
					},
				],
				symptoms: {
					id: 1,
					description:
						"Symptoms of AFib can vary, and in some cases, individuals may not notice any symptoms at all. You may experience the following symptoms with AFib:",
					symptomsList: [
						"Palpitations",
						"Shortness of breath",
						"Fatigue or weakness",
						"Chest pain",
						"Dizziness or lightheadedness",
						"Fatigue or weakness",
						"Chest pain",
						"Dizziness or lightheadedness",
					],
				},
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
						description:
							'Total cholesterol/HDL ratio: Assesses cardiovascular risk by comparing total cholesterol to "good" HDL cholesterol.',
						date: "01.07.24",
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
						description:
							'Total cholesterol/HDL ratio: Assesses cardiovascular risk by comparing total cholesterol to "good" HDL cholesterol.',
						date: "01.07.24",
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
						description:
							'Total cholesterol/HDL ratio: Assesses cardiovascular risk by comparing total cholesterol to "good" HDL cholesterol.',
						date: "01.07.24",
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
						description:
							'Total cholesterol/HDL ratio: Assesses cardiovascular risk by comparing total cholesterol to "good" HDL cholesterol.',
						date: "01.07.24",
					},
				],
				symptoms: {
					id: 1,
					description:
						"Symptoms of AFib can vary, and in some cases, individuals may not notice any symptoms at all. You may experience the following symptoms with AFib:",
					symptomsList: [
						"Fatigue or weakness",
						"Dizziness or lightheadedness",
						"Chest pain",
						"Palpitations",
						"Shortness of breath",
						"Dizziness or lightheadedness",
					],
				},
			},
		],
	},
];
