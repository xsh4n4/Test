import Drop from "@assets/ConcernsWidget/Drop.svg";
// import Gene from "@assets/ConcernsWidget/Gene.svg";
// import Vitals from "@assets/ConcernsWidget/Vitals.svg";

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
				title: "Atrial Fibrillation",
				factors: ["High Cholesterol level", "Other influencing factors"],
				status: "High",
				reasons: [
					{
						id: 1,
						title: "LDL",
						icon: Drop,
						test: "Blood test",
						level: 55,
						value: "112",
						unit: "mg/dL",
						status: "Above optimal",
						description:
							'LDL stands for low-density lipoprotein, a type of cholesterol in your blood that is sometimes called "bad" cholesterol',
						date: "100-129",
					},
					{
						id: 2,
						title: "VLDL",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "17",
						unit: "mg/dL",
						status: "Optimal",
						description:
							"VLDL stands for very low-density lipoprotein, a type of fat in your blood that can contribute to plaque buildup in your arteries.",
						date: "7-40",
					},
					{
						id: 3,
						title: "HDL",
						icon: Drop,
						test: "Blood test",
						level: 20,
						value: "58",
						unit: "mg/dL",
						status: "Below Optimal",
						description:
							" HDL helps remove cholesterol from the bloodstream and is linked to a lower risk of heart disease.",
						date: "60-null",
					},

					{
						id: 4,
						title: "Cholesterol",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "181",
						unit: "mg/dL",
						status: "Optimal",
						description:
							"Your body needs cholesterol to make hormones, digest food, and more. However, too much cholesterol can be a problem. ",
						date: "null-200",
					},
					{
						id: 4,
						title: "Cholesterol:HDL",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "3.1",
						unit: "Ratio",
						status: "Optimal",
						description:
							"Calculation that compares your total cholesterol to your high-density lipoprotein (HDL) cholesterol levels ",
						date: "null-4",
					},
					{
						id: 4,
						title: "HbA1C",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "5.3",
						unit: "Ratio",
						status: "Optimal",
						description:
							"Average level of blood sugar over the past two to three months ",
						date: "4-6",
					},
				],
				symptoms: {
					id: 1,
					description:
						"Symptoms of AFib can vary, and in some cases, individuals may not notice any symptoms at all. You may experience the following symptoms with AFib",
					symptomsList: [
						"Palpitations",
						"Shortness of breath",
						"Fatigue or weakness",
						"Chest pain",
						"Dizziness or lightheadedness",
						"Fatigue or weakness",
					],
				},
			},
			{
				id: 2,
				title: "Stroke",
				factors: ["High heart rate level", "Other influencing factors"],
				status: "High",
				reasons: [
					{
						id: 1,
						title: "LDL",
						icon: Drop,
						test: "Blood test",
						level: 55,
						value: "112",
						unit: "mg/dL",
						status: "Above optimal",
						description:
							'LDL stands for low-density lipoprotein, a type of cholesterol in your blood that is sometimes called "bad" cholesterol',
						date: "100-129",
					},
					{
						id: 2,
						title: "VLDL",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "17",
						unit: "mg/dL",
						status: "Optimal",
						description:
							"VLDL stands for very low-density lipoprotein, a type of fat in your blood that can contribute to plaque buildup in your arteries.",
						date: "7-40",
					},
					{
						id: 3,
						title: "HDL",
						icon: Drop,
						test: "Blood test",
						level: 20,
						value: "58",
						unit: "mg/dL",
						status: "Below Optimal",
						description:
							" HDL helps remove cholesterol from the bloodstream and is linked to a lower risk of heart disease.",
						date: "60-null",
					},

					{
						id: 4,
						title: "Cholesterol",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "181",
						unit: "mg/dL",
						status: "Optimal",
						description:
							"Your body needs cholesterol to make hormones, digest food, and more. However, too much cholesterol can be a problem. ",
						date: "null-200",
					},
					{
						id: 4,
						title: "Cholesterol:HDL",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "3.1",
						unit: "Ratio",
						status: "Optimal",
						description:
							"Calculation that compares your total cholesterol to your high-density lipoprotein (HDL) cholesterol levels ",
						date: "null-4",
					},
					{
						id: 4,
						title: "HbA1C",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "5.3",
						unit: "Ratio",
						status: "Optimal",
						description:
							"Average level of blood sugar over the past two to three months ",
						date: "4-6",
					},
				],
				symptoms: {
					id: 1,
					description:
						"Symptoms of an ischemic stroke can be sudden and life-threatening, requiring immediate medical attention. However, some individuals may experience mild symptoms that can be mistaken for other conditions. You may experience the following symptoms with an ischemic stroke:",
					symptomsList: [
						"Sudden numbness or weakness, especially on one side of the body",
						"Confusion or trouble speaking",
						"Vision problems in one or both eyes",
						"Difficulty walking, dizziness, or loss of balance",
						"Severe headache with no known cause",
					],
				},
			},
			{
				id: 3,
				title: "Coronary Artery Disease",
				factors: ["High heart rate level", "Other influencing factors"],
				status: "Medium",
				reasons: [
					{
						id: 1,
						title: "LDL",
						icon: Drop,
						test: "Blood test",
						level: 55,
						value: "112",
						unit: "mg/dL",
						status: "Above optimal",
						description:
							'LDL stands for low-density lipoprotein, a type of cholesterol in your blood that is sometimes called "bad" cholesterol',
						date: "100-129",
					},
					{
						id: 2,
						title: "VLDL",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "17",
						unit: "mg/dL",
						status: "Optimal",
						description:
							"VLDL stands for very low-density lipoprotein, a type of fat in your blood that can contribute to plaque buildup in your arteries.",
						date: "7-40",
					},
					{
						id: 3,
						title: "HDL",
						icon: Drop,
						test: "Blood test",
						level: 20,
						value: "58",
						unit: "mg/dL",
						status: "Below Optimal",
						description:
							" HDL helps remove cholesterol from the bloodstream and is linked to a lower risk of heart disease.",
						date: "60-null",
					},

					{
						id: 4,
						title: "Cholesterol",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "181",
						unit: "mg/dL",
						status: "Optimal",
						description:
							"Your body needs cholesterol to make hormones, digest food, and more. However, too much cholesterol can be a problem. ",
						date: "null-200",
					},
					{
						id: 4,
						title: "Cholesterol:HDL",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "3.1",
						unit: "Ratio",
						status: "Optimal",
						description:
							"Calculation that compares your total cholesterol to your high-density lipoprotein (HDL) cholesterol levels ",
						date: "null-4",
					},
					{
						id: 4,
						title: "HbA1C",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "5.3",
						unit: "Ratio",
						status: "Optimal",
						description:
							"Average level of blood sugar over the past two to three months ",
						date: "4-6",
					},
				],
				symptoms: {
					id: 1,
					description:
						"Symptoms of CAD can vary, and in some cases, there may be no noticeable signs until the condition is advanced. You may experience the following symptoms with CAD:",
					symptomsList: [
						"Chest pain (angina)",
						"Shortness of breath",
						"Fatigue",
						"Heart palpitations",
						"Nausea",
					],
				},
			},
			{
				id: 4,
				title: "Hypertension",
				factors: ["High Cholesterol level", "Other influencing factors"],
				status: "High",
				reasons: [
					{
						id: 1,
						title: "LDL",
						icon: Drop,
						test: "Blood test",
						level: 55,
						value: "112",
						unit: "mg/dL",
						status: "Above optimal",
						description:
							'LDL stands for low-density lipoprotein, a type of cholesterol in your blood that is sometimes called "bad" cholesterol',
						date: "100-129",
					},
					{
						id: 2,
						title: "VLDL",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "17",
						unit: "mg/dL",
						status: "Optimal",
						description:
							"VLDL stands for very low-density lipoprotein, a type of fat in your blood that can contribute to plaque buildup in your arteries.",
						date: "7-40",
					},
					{
						id: 3,
						title: "HDL",
						icon: Drop,
						test: "Blood test",
						level: 20,
						value: "58",
						unit: "mg/dL",
						status: "Below Optimal",
						description:
							" HDL helps remove cholesterol from the bloodstream and is linked to a lower risk of heart disease.",
						date: "60-null",
					},

					{
						id: 4,
						title: "Cholesterol",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "181",
						unit: "mg/dL",
						status: "Optimal",
						description:
							"Your body needs cholesterol to make hormones, digest food, and more. However, too much cholesterol can be a problem. ",
						date: "null-200",
					},
					{
						id: 4,
						title: "Cholesterol:HDL",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "3.1",
						unit: "Ratio",
						status: "Optimal",
						description:
							"Calculation that compares your total cholesterol to your high-density lipoprotein (HDL) cholesterol levels ",
						date: "null-4",
					},
					{
						id: 4,
						title: "HbA1C",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "5.3",
						unit: "Ratio",
						status: "Optimal",
						description:
							"Average level of blood sugar over the past two to three months ",
						date: "4-6",
					},
				],
				symptoms: {
					id: 1,
					description:
						"Symptoms of hypertension are often not noticeable until they reach severe levels, which is why it is known as the -silent killer.- However, you may experience the following symptoms if hypertension becomes severe:",
					symptomsList: [
						"Headaches",
						"Shortness of breath",
						"Nosebleeds",
						"Fatigue or confusion",
						"Vision problems",
					],
				},
			},
			{
				id: 2,
				title: "Heart Failure",
				factors: ["High heart rate level", "Other influencing factors"],
				status: "Low",
				reasons: [
					{
						id: 1,
						title: "LDL",
						icon: Drop,
						test: "Blood test",
						level: 55,
						value: "112",
						unit: "mg/dL",
						status: "Above optimal",
						description:
							'LDL stands for low-density lipoprotein, a type of cholesterol in your blood that is sometimes called "bad" cholesterol',
						date: "100-129",
					},
					{
						id: 2,
						title: "VLDL",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "17",
						unit: "mg/dL",
						status: "Optimal",
						description:
							"VLDL stands for very low-density lipoprotein, a type of fat in your blood that can contribute to plaque buildup in your arteries.",
						date: "7-40",
					},
					{
						id: 3,
						title: "HDL",
						icon: Drop,
						test: "Blood test",
						level: 20,
						value: "58",
						unit: "mg/dL",
						status: "Below Optimal",
						description:
							" HDL helps remove cholesterol from the bloodstream and is linked to a lower risk of heart disease.",
						date: "60-null",
					},

					{
						id: 4,
						title: "Cholesterol",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "181",
						unit: "mg/dL",
						status: "Optimal",
						description:
							"Your body needs cholesterol to make hormones, digest food, and more. However, too much cholesterol can be a problem. ",
						date: "null-200",
					},
					{
						id: 4,
						title: "Cholesterol:HDL",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "3.1",
						unit: "Ratio",
						status: "Optimal",
						description:
							"Calculation that compares your total cholesterol to your high-density lipoprotein (HDL) cholesterol levels ",
						date: "null-4",
					},
					{
						id: 4,
						title: "HbA1C",
						icon: Drop,
						test: "Blood test",
						level: 50,
						value: "5.3",
						unit: "Ratio",
						status: "Optimal",
						description:
							"Average level of blood sugar over the past two to three months ",
						date: "4-6",
					},
				],
				symptoms: {
					id: 1,
					description:
						"Symptoms of sudden cardiac arrest are often immediate and life-threatening, requiring urgent medical intervention. However, in some cases, individuals may experience warning signs. You may experience the following symptoms prior to sudden cardiac arrest:",
					symptomsList: [
						"Sudden collapse",
						"No pulse",
						"No breathing",
						"Loss of consciousness",
						"Sometimes preceded by chest pain, shortness of breath, or dizziness",
					],
				},
			},
		],
	},
];
