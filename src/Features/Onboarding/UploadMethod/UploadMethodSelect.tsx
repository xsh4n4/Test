import { ConfigItemCard } from "./Components/ConfigItemCard/ConfirmItemCard";
import styles from "./UploadMethod.module.scss";
import React from "react";
// import ArrowUpRightIcon from "@assets/General/ArrowUpRight.svg?react";
import QueryIcon from "@assets/General/Query.svg?react";
import UploadCloudIcon from "@assets/General/UploadCloud.svg?react";
import ShoppingCartPlusIcon from "@assets/General/ShoppingCartPlus.svg?react";
import AppsIcon from "@assets/General/Apps.svg?react";
import { paths } from "@/App/Routes/Paths";

export const UploadMethodSelect = () => {
	interface CardItem {
		icon: React.ReactNode;
		title: string;
		content: string;
		url?: string;
	}
	const cardItems: CardItem[] = [
		{
			icon: <QueryIcon />,
			title: "Take quiz",
			content:
				"Answer a few quick questions to receive a personalised health and supplement plan tailored to your needs.",
		},
		{
			icon: <UploadCloudIcon />,
			title: "Upload Files",
			content:
				"Securely upload your health reports or genetic data to get precise recommendations based on your medical history.",
			url: paths.config.importOrUpload,
		},
		{
			icon: <ShoppingCartPlusIcon />,
			title: "Buy Supplements",
			content:
				"Order custom-formulated supplements designed specifically for your health goals and genetic profile.",
		},
		{
			icon: <AppsIcon />,
			title: "Connect App / Device",
			content:
				"Sync your favorite health tracking apps and devices for real-time insights and better health monitoring.",
		},
	];

	return (
		<div className={styles["config-items-wrapper"]}>
			{cardItems.map((card) => (
				<ConfigItemCard key={card.title} {...card} />
			))}
		</div>
	);
};
