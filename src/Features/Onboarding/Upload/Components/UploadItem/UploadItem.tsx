import React from "react";
import styles from "./UploadItem.module.scss";
import { UploadFile } from "../UploadFile/UploadFile";
import StepsTail from "@assets/General/StepsTail.svg?react";

export interface UploadItemProps {
	title: string;
	fileTypes: string[];
	extra?: string;
	fileSize: number;
}

export const UploadItem: React.FC<UploadItemProps> = ({
	title,
	fileTypes,
	extra,
	fileSize,
}) => {
	return (
		<div className={styles["upload-item-container"]}>
			<div className={styles["header"]}>
				<div className={styles["info"]}>
					<div className={styles["title"]}>{title}</div>
					<div className={styles["file-types-container"]}>
						{fileTypes.map((type) => (
							<div className={styles["file-type-container"]}>
								<span className={styles["file-type"]}>{type}</span>
							</div>
						))}
						{extra && <div className={styles["file-size"]}>{extra}</div>}
						<span className={styles["file-size"]}>(max. {fileSize}mb)</span>
					</div>
				</div>
				<button className={styles["browse-files-btn"]}>Browse files</button>
			</div>
			<UploadFile fileName='Metabolism_Report_2024.fastq' />
			<StepsTail
				style={{
					width: "100%",
					strokeWidth: "1px",
					stroke: "#BFC3C1",
					opacity: "0.6",
					paddingTop: "16px",
				}}
			/>
		</div>
	);
};
