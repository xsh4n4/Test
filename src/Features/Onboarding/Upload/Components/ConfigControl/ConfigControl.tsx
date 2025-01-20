import React from "react";
import ArrowRightIcon from "@assets/General/ArrowRight.svg?react";
import styles from "./ConfigControl.module.scss";
import { ConfigControlItems } from "@/App/Consts";

interface ConfigControlProps {
	selectedItem: string;
	setIsOpenedConfirmModal: (open: boolean) => void;
}

export const ConfigControl: React.FC<ConfigControlProps> = ({
	selectedItem,
	setIsOpenedConfirmModal,
}) => {
	return (
		<div className={styles["config-control-bar"]}>
			<div className={styles["config-control-items"]}>
				{Object.keys(ConfigControlItems).map((itemKey: string) => (
					<button
						className={`${styles["config-control-item"]}  ${selectedItem === ConfigControlItems[itemKey as keyof typeof ConfigControlItems] ? styles["selected-config-control-item"] : ""}`}
					>
						{ConfigControlItems[itemKey as keyof typeof ConfigControlItems]}
					</button>
				))}
			</div>
			<button
				className={styles["config-control-bar-submit"]}
				onClick={() => setIsOpenedConfirmModal(true)}
			>
				Submit My Health Data <ArrowRightIcon />
			</button>
		</div>
	);
};
