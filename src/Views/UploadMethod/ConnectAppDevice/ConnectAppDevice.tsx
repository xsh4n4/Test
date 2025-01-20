import { useState } from "react";
import { ConfigControlItems } from "@/App/Consts";
import { ConfigControl } from "@/Features/Onboarding/ConfigControl/ConfigControl";
import { ConfirmModal } from "@/Features/Onboarding/ConfirmModal/ConfirmModal";
import styles from "./ConnectAppDevice.module.scss";
import BackIcon from "@assets/General/Back.svg?react";
import CloseIcon from "@assets/General/Close.svg?react";
import { FilterBar } from "@/Features/Onboarding/ConnectAppDevice/FilterBar/FilterBar";
import { AppDevice } from "@/Features/Onboarding/ConnectAppDevice/AppDevice/AppDevice";
import { useNavigate } from "react-router-dom";
import { paths } from "@/App/Routes/Paths";

const ConnectAppDevice = () => {
	const [isOpenedConfirmModal, setIsOpenedConfirmModal] =
		useState<boolean>(false);
	const navigate = useNavigate();

	const handleClose = () => {
		setIsOpenedConfirmModal(false);
	};

	const handleConfirm = () => {
		setIsOpenedConfirmModal(false);
	};
	return (
		<div className={styles["connect-app-device-container"]}>
			<div className={styles["header"]}>
				<div className={styles["action-wrapper"]}>
					<div
						className={styles["back"]}
						onClick={() => navigate(paths.config.root)}
					>
						<BackIcon />
					</div>
					<div className={styles["title"]}>
						{ConfigControlItems.ConnectApp.title}
					</div>
				</div>
				<div
					className={styles["close"]}
					onClick={() => navigate(paths.config.root)}
				>
					<CloseIcon />
				</div>
			</div>
			<FilterBar />
			<AppDevice />
			<ConfigControl
				selectedItem={ConfigControlItems.ConnectApp}
				setIsOpenedConfirmModal={(opened: boolean) => {
					setIsOpenedConfirmModal(opened);
				}}
			/>
			{isOpenedConfirmModal && (
				<ConfirmModal onClose={handleClose} onConfirm={handleConfirm} />
			)}
		</div>
	);
};

export default ConnectAppDevice;
