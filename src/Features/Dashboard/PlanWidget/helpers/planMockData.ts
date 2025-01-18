export type PlanSection = {
	title: string;
	ctaTitle?: string;
	ctaDescription?: string;
	type?: string;
	data: PlanItem[];
};

export type PlanItem = {
	name: string;
	description: string;
	group?: string;
	dosage?: string;
	frequency?: string;
	count?: number;
	link?: string;
};

export const planMockData: PlanSection[] = [
	{
		title: "Action Plan",
		data: [
			{
				name: "Follow-up actions to maintain health",
				description: "Help preventing your high risk of Diabetes +3",
				count: 7,
				link: "Follow-up Care",
			},
			{
				name: "Must-have supplements to support your wellness",
				description: "Support you in  high risk of Diabetes +3",
				count: 5,
				link: "Supplements",
			},
			{
				name: "Lifestyle tips to boost your wellbeing",
				description: "Helps preventing your high risk of Diabetes +3",
				count: 8,
				link: "Lifestyle",
			},
		],
	},
	{
		title: "Follow-up Care",
		data: [
			{
				name: "Take Genetic Health Risk Tests",
				description: "Improved lung function",
			},
			{
				name: "Monitoring blood pressure 3 times a week",
				description: "Early detection of hypertension",
			},
			{
				name: "Adopt a low-glycemic index and heart healthy diets",
				description: "Helps widen blood vessels +6",
			},
			{
				name: "Keep in range your Body Mass Index",
				description: "Lowers your blood pressure +3",
			},
			{
				name: "Take a cholesterol laboratory test",
				description: "Assessment of insulin resistance +7",
			},
			{
				name: "Consider taking your avg. blood sugar (glucose) level",
				description: "Early detection of diabetes or prediabetes +5",
			},
			{
				name: "Monitoring blood pressure 1 time a day",
				description: "Detect respiratory or cardiovascular issues +5",
			},
		],
	},
	{
		title: "Supplements",
		ctaTitle: "Create My Personal Formula",
		ctaDescription:
			"Get a custom-made supplement tailored to your unique health needs and goals.",
		type: "grouped",
		data: [
			{
				name: "Beetroot powder / titrate supplements",
				description: "Increases nitric oxide levels",
				dosage: "1 pill",
				frequency: "Once",
				group: "peptides",
			},
			{
				name: "Take turmeric extract to reduce inflammation (CPR)",
				description: "Supports vascular health",
				dosage: "1 pill",
				frequency: "Once",
				group: "peptides",
			},
			{
				name: "Take Omega-3 Fatty Acids",
				description: "Helps widen blood vessels +8",
				dosage: "1 pill",
				frequency: "Once",
				group: "other",
			},
			{
				name: "Coenzyme Q10 (CoQ10)",
				description: "Include Coenzyme Q10 (CoQ10)",
				dosage: "1 pill",
				frequency: "Once",
				group: "other",
			},
			{
				name: "Add Ashwagandha (Withania somnifera)",
				description: "Supports vascular health",
				dosage: "1 pill",
				frequency: "Once",
				group: "other",
			},
		],
	},
	{
		title: "Lifestyle",
		data: [
			{
				name: "Quit smoking & limit alcohol",
				description: "Improved lung function +5",
			},
			{
				name: "Train in zone 2 & monitor regularly VO2 max",
				description: "Supports vascular health +4",
			},
			{
				name: "Adopt a low-glycemic index and heart healthy diets",
				description: "Helps widen blood vessels +6",
			},
			{
				name: "Manage your stress",
				description: "Helps widen blood vessels +8",
			},
			{
				name: "Fill your plate with fruits and veggies",
				description: "Lowers your blood pressure +3",
			},
			{
				name: "Reduce sugar and salt",
				description: "Improved lung function +5",
			},
			{
				name: "Practice flexibility and balance",
				description: "Enhances joint health +8",
			},
		],
	},
];
