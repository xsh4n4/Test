import cardio from "@assets/ConcernWidget/Cardio.svg";
import reproductive from "@assets/ConcernWidget/Reproductive.svg";
import digestive from "@assets/ConcernWidget/Digestive.svg";

const healthConcernsMock = [
	{
		system: "Cardiovascular System",
		icon: cardio,
		concerns: [
			{ label: "Stroke", status: "High" },
			{ label: "Coronary Artery Disease", status: "High" },
			{ label: "HDL/LDL", status: "High" },
			{ label: "Inflammation (CRP)", status: "High" },
		],
	},
	{
		system: "Reproductive System",
		icon: reproductive,
		concerns: [
			{ label: "Hormonal Imbalance", status: "Medium" },
			{ label: "Polycystic Ovary Syndrome (PCOS)", status: "Low" },
			{ label: "Fertility Issues", status: "Medium" },
		],
	},
	{
		system: "Digestive System",
		icon: digestive,
		concerns: [
			{ label: "Irritable Bowel Syndrome (IBS)", status: "Low" },
			{ label: "Acid Reflux", status: "Medium" },
			{ label: "Food Intolerances", status: "Low" },
		],
	},
	{
		system: "Nervous System",
		icon: digestive,
		concerns: [
			{ label: "Chronic Stress", status: "High" },
			{ label: "Sleep Disorders", status: "Medium" },
			{ label: "Memory Issues", status: "Medium" },
		],
	},
	{
		system: "Immune System",
		icon: digestive,
		concerns: [
			{ label: "Frequent Infections", status: "High" },
			{ label: "Autoimmune Condition", status: "Medium" },
			{ label: "Vitamin Deficiency", status: "Low" },
		],
	},
];

export default healthConcernsMock;
