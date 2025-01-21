import React, { useEffect, useState } from "react";
import { CloseIcon } from "@/assets/Icons/Close";
import CheckMarkIcon from "@assets/General/CheckMark.svg?react";
import styles from "./UploadFile.module.scss";

interface UploadFileProps {
	file: File;
	onClose: (file: File) => void;
}

export const UploadFile: React.FC<UploadFileProps> = ({ file, onClose }) => {
	const [isUploading, setIsUploading] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleFileUpload = () => {
		setIsUploading(true);
		let uploaded = 0;

		const interval = setInterval(() => {
			uploaded += 10;
			setProgress(Math.min(uploaded, 100));

			if (uploaded >= 100) {
				clearInterval(interval);
				setIsUploading(false);
			}
		}, 500);
	};

	useEffect(() => {
		if (file) {
			handleFileUpload();
		}
	}, [file]);

	return (
		<div className={styles["upload-file-container"]}>
			<div className={styles["info"]}>
				<div className={styles["file"]}>
					{progress === 100 && !isUploading && (
						<div className={styles["done"]}>
							<CheckMarkIcon />
						</div>
					)}
					{file.name}
				</div>
				{isUploading ? (
					<>{progress}%</>
				) : (
					<div onClick={() => onClose(file)}>
						<CloseIcon fill='rgba(17, 17, 17, 1)' />
					</div>
				)}
			</div>

			{isUploading && (
				<div className={styles["progress-bar-container"]}>
					<div
						className={styles["progress-bar"]}
						style={{ width: `${progress}%` }}
					></div>
				</div>
			)}
		</div>
	);
};
