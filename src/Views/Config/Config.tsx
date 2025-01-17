import React from "react";
import styles from "./Config.module.scss";
import ArrowUpRightIcon from "@assets/General/ArrowUpRight.svg?react";
import QueryIcon from "@assets/General/Query.svg?react";
import UploadCloudIcon from "@assets/General/UploadCloud.svg?react";
import ShoppingCartPlusIcon from "@assets/General/ShoppingCartPlus.svg?react";
import AppsIcon from "@assets/General/Apps.svg?react";
import { paths } from "@/App/Routes/Paths";
import { useNavigate } from "react-router-dom";

interface CardItem {
	icon: React.ReactNode;
	title: string;
	content: string;
	url?: string;
}

const ConfigItemCard: React.FC<CardItem> = ({ icon, title, content, url }) => {
	const navigate = useNavigate();
	return (
		<div className={styles["config-item-card"]}>
			<div className={styles["item-card-icon-wrapper"]}>
				<div className={styles["item-card-icon"]}>{icon}</div>
				<ArrowUpRightIcon
					onClick={() => url && navigate(url)}
					style={{ cursor: "pointer" }}
				/>
			</div>
			<div className={styles["item-card-title"]}>{title}</div>
			<div className={styles["item-card-content"]}>{content}</div>
		</div>
	);
};

const Config = () => {
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
		<div className={styles["config-container-body"]}>
			<div className={styles["config-items-wrapper"]}>
				{cardItems.map((card) => (
					<ConfigItemCard key={card.title} {...card} />
				))}
			</div>
		</div>
	);
};

export default Config;
