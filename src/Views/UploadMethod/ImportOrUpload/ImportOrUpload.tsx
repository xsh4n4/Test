import { useState } from "react";
import styles from "./ImportOrUpload.module.scss";
import { ConfigControl } from "@/Features/Onboarding/Upload/Components/ConfigControl/ConfigControl";
import { ConfigControlItems } from "@/App/Consts";
import { ConfirmModal } from "@/Features/Onboarding/ConfirmModal/ConfirmModal";
import { UploadFiles } from "@/Features/Onboarding/Upload/Components/UploadFiles/UploadFiles";
import { UploadProcess } from "@/Features/Onboarding/Upload/Components/UploadProcess/UploadProcess";

const ImportOrUpload = () => {
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const [isOpenedConfirmModal, setIsOpenedConfirmModal] =
		useState<boolean>(false);

	const handleClose = () => {
		setIsOpenedConfirmModal(false);
	};

	const handleConfirm = () => {
		setIsOpenedConfirmModal(false);
		setIsUploading(true);
	};

	return (
		<div className={styles["import-upload-container"]}>
			{isUploading ? <UploadProcess /> : <UploadFiles />}
			<ConfigControl
				selectedItem={ConfigControlItems.UploadFiles}
				processed={isUploading}
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

export default ImportOrUpload;
