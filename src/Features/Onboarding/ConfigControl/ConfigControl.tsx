import React from "react";
import ArrowRightIcon from "@assets/General/ArrowRight.svg?react";
import styles from "./ConfigControl.module.scss";
import { ConfigControlItems } from "@/App/Consts";
import { useNavigate } from "react-router-dom";
import { paths } from "@/App/Routes/Paths";

interface ConfigControlProps {
	selectedItem: {
		title: string;
		url: string;
	};
	processed: boolean;
	setIsOpenedConfirmModal: (open: boolean) => void;
}

export const ConfigControl: React.FC<ConfigControlProps> = ({
	selectedItem,
	processed,
	setIsOpenedConfirmModal,
}) => {
	const navigate = useNavigate();
	return (
		<div className={styles["config-control-bar"]}>
			<div className={styles["config-control-items"]}>
				{Object.keys(ConfigControlItems).map((itemKey: string) => (
					<button
						className={`${styles["config-control-item"]}  ${selectedItem.title === ConfigControlItems[itemKey as keyof typeof ConfigControlItems].title ? styles["selected-config-control-item"] : ""}`}
						onClick={() => {
							navigate(
								ConfigControlItems[itemKey as keyof typeof ConfigControlItems]
									.url,
							);
						}}
					>
						{
							ConfigControlItems[itemKey as keyof typeof ConfigControlItems]
								.title
						}
					</button>
				))}
			</div>
			<button
				className={styles["config-control-bar-submit"]}
				onClick={() => {
					if (!processed) {
						setIsOpenedConfirmModal(true);
					} else {
						navigate(paths.dashboard);
					}
				}}
			>
				{processed ? "Explore your digital twin" : "Submit My Health Data"}{" "}
				<ArrowRightIcon />
			</button>
		</div>
	);
};
