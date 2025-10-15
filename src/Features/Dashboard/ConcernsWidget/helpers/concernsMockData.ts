import Heart from "@assets/ConcernsWidget/Heart.svg";
import Diab from "@assets/ConcernsWidget/Diab.svg";

export interface Concern {
	id: number;
	title: string;
	factors: string[];
	icon: string;
	status: "High" | "Medium" | "Low";
	link?: string;
}

export const concernsMockData: Concern[] = [
	{
		id: 1,
		title: "concerns.atrialFibrillation.title",
		factors: [
			"concerns.atrialFibrillation.factors.highCholesterol",
			"concerns.atrialFibrillation.factors.smoking",
			"concerns.atrialFibrillation.factors.hypertension",
		],
		icon: Heart,
		status: "High",
		link: "cardiovascular",
	},
	{
		id: 2,
		title: "concerns.stroke.title",
		factors: [
			"concerns.stroke.factors.lowOralGlucose",
			"concerns.stroke.factors.familyHistory",
		],
		icon: Diab,
		status: "High",
		link: "cardiovascular",
	},
	{
		id: 3,
		title: "concerns.coronaryArteryDisease.title",
		factors: [
			"concerns.coronaryArteryDisease.factors.highCoronaryArteryCalcium",
			"concerns.coronaryArteryDisease.factors.highCoronaryArteryCalcium",
		],
		icon: Heart,
		status: "Medium",
	},
	{
		id: 4,
		title: "concerns.hypertension.title",
		factors: [
			"concerns.hypertension.factors.highBloodPressure",
			"concerns.hypertension.factors.stress",
			"concerns.hypertension.factors.highSodiumDiet",
		],
		icon: Heart,
		status: "Medium",
	},
	{
		id: 5,
		title: "concerns.chronicKidneyDisease.title",
		factors: [
			"concerns.chronicKidneyDisease.factors.elevatedCreatinine",
			"concerns.chronicKidneyDisease.factors.diabetes",
			"concerns.chronicKidneyDisease.factors.hypertension",
		],
		icon: Diab,
		status: "High",
	},
	{
		id: 6,
		title: "concerns.obesity.title",
		factors: [
			"concerns.obesity.factors.highBMI",
			"concerns.obesity.factors.lowPhysicalActivity",
			"concerns.obesity.factors.unhealthyEating",
		],
		icon: Heart,
		status: "Low",
	},
];
