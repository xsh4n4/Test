import beetroot from "@assets/PlanWidget/Supplements/beetroot.svg";
import tumeric from "@assets/PlanWidget/Supplements/tumeric.svg";
import omega from "@assets/PlanWidget/Supplements/omega.svg";
import coenzyme from "@assets/PlanWidget/Supplements/coenzyme.svg";
import ashwagandha from "@assets/PlanWidget/Supplements/ashwagandha.svg";

import train from "@assets/PlanWidget/Lifestyle/train.svg";
import quitSmoking from "@assets/PlanWidget/Lifestyle/quitSmoking.svg";
import apple from "@assets/PlanWidget/Lifestyle/apple.svg";

import gene from "@assets/PlanWidget/FollowUpCare/gene.svg";
import microscope from "@assets/PlanWidget/FollowUpCare/microscope.svg";
import scale from "@assets/PlanWidget/FollowUpCare/scale.svg";

import heart from "@assets/ConcernsWidget/Heart.svg";
import diab from "@assets/ConcernsWidget/Diab.svg";

export type PlanSection = {
	title: string;
	cta?: Supplements;
	type?: string;
	data: PlanItem[];
};

export type Supplements = {
	title: string;
	description: string;
	types: {
		name: string;
		icon: string;
		supplements: {
			amount: number;
			supplement: string;
		}[];
	}[];
};

export type PlanItem = {
	name: string;
	description: string;
	group?: string;
	dosage?: string;
	frequency?: string;
	count?: number;
	link?: string;
	icon: string;
};

export const planMockData: PlanSection[] = [
	{
		title: "plan.actionPlan.title",
		type: "aggregated",
		data: [],
	},
	{
		title: "plan.followUpCare.title",
		data: [
			{
				name: "plan.followUpCare.items.0.name",
				description: "plan.followUpCare.items.0.description",
				icon: gene,
			},
			{
				name: "plan.followUpCare.items.1.name",
				description: "plan.followUpCare.items.1.description",
				icon: scale,
			},
			{
				name: "plan.followUpCare.items.2.name",
				description: "plan.followUpCare.items.2.description",
				icon: microscope,
			},
			{
				name: "plan.followUpCare.items.3.name",
				description: "plan.followUpCare.items.3.description",
				icon: scale,
			},
			{
				name: "plan.followUpCare.items.4.name",
				description: "plan.followUpCare.items.4.description",
				icon: microscope,
			},
			{
				name: "plan.followUpCare.items.5.name",
				description: "plan.followUpCare.items.5.description",
				icon: microscope,
			},
			{
				name: "plan.followUpCare.items.6.name",
				description: "plan.followUpCare.items.6.description",
				icon: scale,
			},
		],
	},
	{
		title: "plan.supplements.title",
		cta: {
			title: "plan.supplements.cta.title",
			description: "plan.supplements.cta.description",
			types: [
				{
					name: "plan.supplements.cta.types.0.name",
					icon: heart,
					supplements: [
						{
							amount: 4,
							supplement: "plan.supplements.cta.types.0.supplements.0",
						},
						{
							amount: 3,
							supplement: "plan.supplements.cta.types.0.supplements.1",
						},
						{
							amount: 1,
							supplement: "plan.supplements.cta.types.0.supplements.2",
						},
						{
							amount: 2,
							supplement: "plan.supplements.cta.types.0.supplements.3",
						},
					],
				},
				{
					name: "plan.supplements.cta.types.1.name",
					icon: diab,
					supplements: [
						{
							amount: 3,
							supplement: "plan.supplements.cta.types.1.supplements.0",
						},
						{
							amount: 3,
							supplement: "plan.supplements.cta.types.1.supplements.1",
						},
						{
							amount: 3,
							supplement: "plan.supplements.cta.types.1.supplements.2",
						},
						{
							amount: 1,
							supplement: "plan.supplements.cta.types.1.supplements.3",
						},
					],
				},
				{
					name: "plan.supplements.cta.types.2.name",
					icon: heart,
					supplements: [
						{
							amount: 7,
							supplement: "plan.supplements.cta.types.2.supplements.0",
						},
						{
							amount: 6,
							supplement: "plan.supplements.cta.types.2.supplements.1",
						},
						{
							amount: 4,
							supplement: "plan.supplements.cta.types.2.supplements.2",
						},
						{
							amount: 3,
							supplement: "plan.supplements.cta.types.2.supplements.3",
						},
					],
				},
			],
		},
		type: "grouped",
		data: [
			{
				name: "plan.supplements.items.0.name",
				description: "plan.supplements.items.0.description",
				dosage: "plan.supplements.items.0.dosage",
				frequency: "plan.supplements.items.0.frequency",
				group: "peptides",
				icon: beetroot,
			},
			{
				name: "plan.supplements.items.1.name",
				description: "plan.supplements.items.1.description",
				dosage: "plan.supplements.items.1.dosage",
				frequency: "plan.supplements.items.1.frequency",
				group: "peptides",
				icon: tumeric,
			},
			{
				name: "plan.supplements.items.2.name",
				description: "plan.supplements.items.2.description",
				dosage: "plan.supplements.items.2.dosage",
				frequency: "plan.supplements.items.2.frequency",
				group: "other",
				icon: omega,
			},
			{
				name: "plan.supplements.items.3.name",
				description: "plan.supplements.items.3.description",
				dosage: "plan.supplements.items.3.dosage",
				frequency: "plan.supplements.items.3.frequency",
				group: "other",
				icon: coenzyme,
			},
			{
				name: "plan.supplements.items.4.name",
				description: "plan.supplements.items.4.description",
				dosage: "plan.supplements.items.4.dosage",
				frequency: "plan.supplements.items.4.frequency",
				group: "other",
				icon: ashwagandha,
			},
		],
	},
	{
		title: "plan.lifestyle.title",
		data: [
			{
				name: "plan.lifestyle.items.0.name",
				description: "plan.lifestyle.items.0.description",
				icon: quitSmoking,
			},
			{
				name: "plan.lifestyle.items.1.name",
				description: "plan.lifestyle.items.1.description",
				icon: train,
			},
			{
				name: "plan.lifestyle.items.2.name",
				description: "plan.lifestyle.items.2.description",
				icon: apple,
			},
			{
				name: "plan.lifestyle.items.3.name",
				description: "plan.lifestyle.items.3.description",
				icon: quitSmoking,
			},
			{
				name: "plan.lifestyle.items.4.name",
				description: "plan.lifestyle.items.4.description",
				icon: apple,
			},
			{
				name: "plan.lifestyle.items.5.name",
				description: "plan.lifestyle.items.5.description",
				icon: apple,
			},
			{
				name: "plan.lifestyle.items.6.name",
				description: "plan.lifestyle.items.6.description",
				icon: train,
			},
		],
	},
];

export const AtrialFibrillationPlanMockData: PlanSection[] = [
	{
		title: "plan.actionPlan.title",
		type: "aggregated",
		data: [],
	},
	{
		title: "plan.followUpCare.title",
		data: [
			{
				name: "plan.atrialFib.followUpCare.items.0.name",
				description: "plan.atrialFib.followUpCare.items.0.description",
				icon: gene,
			},
			{
				name: "plan.atrialFib.followUpCare.items.1.name",
				description: "plan.atrialFib.followUpCare.items.1.description",
				icon: microscope,
			},
		],
	},
	{
		title: "plan.supplements.title",
		cta: {
			title: "plan.atrialFib.supplements.cta.title",
			description: "plan.atrialFib.supplements.cta.description",
			types: [
				{
					name: "plan.atrialFib.supplements.cta.types.0.name",
					icon: heart,
					supplements: [
						{
							amount: 3,
							supplement: "plan.supplements.cta.types.0.supplements.0",
						},
						{
							amount: 2,
							supplement: "plan.supplements.cta.types.0.supplements.1",
						},
					],
				},
			],
		},
		data: [
			{
				name: "plan.atrialFib.supplements.items.0.name",
				description: "plan.atrialFib.supplements.items.0.description",
				icon: omega,
			},
			{
				name: "plan.atrialFib.supplements.items.1.name",
				description: "plan.atrialFib.supplements.items.1.description",
				icon: tumeric,
			},
		],
	},
	{
		title: "plan.lifestyle.title",
		data: [
			{
				name: "plan.atrialFib.lifestyle.items.0.name",
				description: "plan.atrialFib.lifestyle.items.0.description",
				icon: quitSmoking,
			},
			{
				name: "plan.atrialFib.lifestyle.items.1.name",
				description: "plan.atrialFib.lifestyle.items.1.description",
				icon: apple,
			},
		],
	},
];

export const StrokePlanMockData: PlanSection[] = [
	{
		title: "plan.actionPlan.title",
		type: "aggregated",
		data: [],
	},
	{
		title: "plan.followUpCare.title",
		data: [
			{
				name: "plan.stroke.followUpCare.items.0.name",
				description: "plan.stroke.followUpCare.items.0.description",
				icon: scale,
			},
			{
				name: "plan.stroke.followUpCare.items.1.name",
				description: "plan.stroke.followUpCare.items.1.description",
				icon: gene,
			},
		],
	},
	{
		title: "plan.supplements.title",
		cta: {
			title: "plan.stroke.supplements.cta.title",
			description: "plan.stroke.supplements.cta.description",
			types: [
				{
					name: "plan.stroke.supplements.cta.types.0.name",
					icon: diab,
					supplements: [
						{
							amount: 4,
							supplement: "plan.supplements.cta.types.0.supplements.3",
						},
						{
							amount: 3,
							supplement: "plan.supplements.cta.types.0.supplements.0",
						},
					],
				},
			],
		},
		data: [
			{
				name: "plan.stroke.supplements.items.0.name",
				description: "plan.stroke.supplements.items.0.description",
				icon: coenzyme,
			},
			{
				name: "plan.stroke.supplements.items.1.name",
				description: "plan.stroke.supplements.items.1.description",
				icon: ashwagandha,
			},
		],
	},
	{
		title: "plan.lifestyle.title",
		data: [
			{
				name: "plan.stroke.lifestyle.items.0.name",
				description: "plan.stroke.lifestyle.items.0.description",
				icon: train,
			},
			{
				name: "plan.stroke.lifestyle.items.1.name",
				description: "plan.stroke.lifestyle.items.1.description",
				icon: apple,
			},
		],
	},
];

export const CoronaryArteryDiseasePlanMockData: PlanSection[] = [
	{
		title: "plan.actionPlan.title",
		type: "aggregated",
		data: [],
	},
	{
		title: "plan.followUpCare.title",
		data: [
			{
				name: "plan.coronary.followUpCare.items.0.name",
				description: "plan.coronary.followUpCare.items.0.description",
				icon: gene,
			},
			{
				name: "plan.coronary.followUpCare.items.1.name",
				description: "plan.coronary.followUpCare.items.1.description",
				icon: microscope,
			},
		],
	},
	{
		title: "plan.supplements.title",
		cta: {
			title: "plan.coronary.supplements.cta.title",
			description: "plan.coronary.supplements.cta.description",
			types: [
				{
					name: "plan.coronary.supplements.cta.types.0.name",
					icon: heart,
					supplements: [
						{
							amount: 3,
							supplement: "plan.supplements.cta.types.0.supplements.1",
						},
						{
							amount: 2,
							supplement: "plan.supplements.cta.types.0.supplements.0",
						},
					],
				},
			],
		},
		data: [
			{
				name: "plan.coronary.supplements.items.0.name",
				description: "plan.coronary.supplements.items.0.description",
				icon: omega,
			},
			{
				name: "plan.coronary.supplements.items.1.name",
				description: "plan.coronary.supplements.items.1.description",
				icon: tumeric,
			},
		],
	},
	{
		title: "plan.lifestyle.title",
		data: [
			{
				name: "plan.coronary.lifestyle.items.0.name",
				description: "plan.coronary.lifestyle.items.0.description",
				icon: train,
			},
			{
				name: "plan.coronary.lifestyle.items.1.name",
				description: "plan.coronary.lifestyle.items.1.description",
				icon: apple,
			},
		],
	},
];

export const HypertensionPlanMockData: PlanSection[] = [
	{
		title: "plan.actionPlan.title",
		type: "aggregated",
		data: [],
	},
	{
		title: "plan.followUpCare.title",
		data: [
			{
				name: "plan.hypertension.followUpCare.items.0.name",
				description: "plan.hypertension.followUpCare.items.0.description",
				icon: scale,
			},
			{
				name: "plan.hypertension.followUpCare.items.1.name",
				description: "plan.hypertension.followUpCare.items.1.description",
				icon: gene,
			},
		],
	},
	{
		title: "plan.supplements.title",
		cta: {
			title: "plan.hypertension.supplements.cta.title",
			description: "plan.hypertension.supplements.cta.description",
			types: [
				{
					name: "plan.hypertension.supplements.cta.types.0.name",
					icon: diab,
					supplements: [
						{
							amount: 3,
							supplement: "plan.supplements.cta.types.0.supplements.0",
						},
						{
							amount: 2,
							supplement: "plan.supplements.cta.types.0.supplements.1",
						},
					],
				},
			],
		},
		data: [
			{
				name: "plan.hypertension.supplements.items.0.name",
				description: "plan.hypertension.supplements.items.0.description",
				icon: beetroot,
			},
			{
				name: "plan.hypertension.supplements.items.1.name",
				description: "plan.hypertension.supplements.items.1.description",
				icon: ashwagandha,
			},
		],
	},
	{
		title: "plan.lifestyle.title",
		data: [
			{
				name: "plan.hypertension.lifestyle.items.0.name",
				description: "plan.hypertension.lifestyle.items.0.description",
				icon: quitSmoking,
			},
			{
				name: "plan.hypertension.lifestyle.items.1.name",
				description: "plan.hypertension.lifestyle.items.1.description",
				icon: train,
			},
		],
	},
];

export const HeartFailurePlanMockData: PlanSection[] = [
	{
		title: "plan.actionPlan.title",
		type: "aggregated",
		data: [],
	},
	{
		title: "plan.followUpCare.title",
		data: [
			{
				name: "plan.heartFailure.followUpCare.items.0.name",
				description: "plan.heartFailure.followUpCare.items.0.description",
				icon: gene,
			},
			{
				name: "plan.heartFailure.followUpCare.items.1.name",
				description: "plan.heartFailure.followUpCare.items.1.description",
				icon: scale,
			},
		],
	},
	{
		title: "plan.supplements.title",
		cta: {
			title: "plan.heartFailure.supplements.cta.title",
			description: "plan.heartFailure.supplements.cta.description",
			types: [
				{
					name: "plan.heartFailure.supplements.cta.types.0.name",
					icon: heart,
					supplements: [
						{
							amount: 3,
							supplement: "plan.supplements.cta.types.0.supplements.0",
						},
						{
							amount: 2,
							supplement: "plan.supplements.cta.types.0.supplements.1",
						},
					],
				},
			],
		},
		data: [
			{
				name: "plan.heartFailure.supplements.items.0.name",
				description: "plan.heartFailure.supplements.items.0.description",
				icon: coenzyme,
			},
			{
				name: "plan.heartFailure.supplements.items.1.name",
				description: "plan.heartFailure.supplements.items.1.description",
				icon: tumeric,
			},
		],
	},
	{
		title: "plan.lifestyle.title",
		data: [
			{
				name: "plan.heartFailure.lifestyle.items.0.name",
				description: "plan.heartFailure.lifestyle.items.0.description",
				icon: apple,
			},
			{
				name: "plan.heartFailure.lifestyle.items.1.name",
				description: "plan.heartFailure.lifestyle.items.1.description",
				icon: train,
			},
		],
	},
];
