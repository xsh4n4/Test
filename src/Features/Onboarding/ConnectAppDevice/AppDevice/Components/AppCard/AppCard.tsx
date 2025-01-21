import React, { useState } from "react";
import styles from "./AppCard.module.scss";

interface AppCardProps {
	img: string;
	title: string;
	description: string;
}

export const AppCard: React.FC<AppCardProps> = ({
	img,
	title,
	description,
}) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);
	return (
		<div
			className={styles["app-card-container"]}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className={styles["header-wrapper"]}>
				<div className={styles["image-wrapper"]}>
					<img src={img} />
				</div>
				{isHovered && (
					<button className={styles["connect-btn"]}>Connect</button>
				)}
			</div>
			<div className={styles["info"]}>
				<div className={styles["title"]}>{title}</div>
				<div className={styles["description"]}>{description}</div>
			</div>
		</div>
	);
};
