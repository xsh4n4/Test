import { CloseIcon } from "@/assets/Icons/Close";
import styles from "./UploadFile.module.scss";
import React from "react";

interface UploadFileProps {
	fileName: string;
}

export const UploadFile: React.FC<UploadFileProps> = ({ fileName }) => {
	return (
		<div className={styles["upload-file-container"]}>
			<div className={styles["file"]}>{fileName}</div>
			<CloseIcon fill='rgba(17, 17, 17, 1)' />
		</div>
	);
};
