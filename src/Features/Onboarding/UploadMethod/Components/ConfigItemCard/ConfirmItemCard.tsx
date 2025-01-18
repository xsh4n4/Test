import React from "react";
import styles from "./ConfirmCard.module.scss";
import ArrowUpRightIcon from "@assets/General/ArrowUpRight.svg?react";
import { useNavigate } from "react-router-dom";

interface CardItemProps {
	icon: React.ReactNode;
	title: string;
	content: string;
	url?: string;
}

export const ConfigItemCard: React.FC<CardItemProps> = ({
	icon,
	title,
	content,
	url,
}) => {
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
