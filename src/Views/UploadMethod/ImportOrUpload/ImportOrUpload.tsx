import { useState } from "react";
import styles from "./ImportOrUpload.module.scss";
import GroupIcon from "@assets/General/Group.svg?react";
import FuselabIcon from "@assets/General/Fuselab.svg?react";
import LoaderIcon from "@assets/General/Loader.svg?react";
import { ConfigControl } from "@/Features/Onboarding/Upload/Components/ConfigControl/ConfigControl";
import { ConfigControlItems } from "@/App/Consts";

interface UploadingFile {
	fileName: string;
	percentage: number;
}

const ImportOrUpload = () => {
	const FileTypes = [".fastq", ".vcf", ".pdf"];
	const [selectedFileType, setSelectedFileType] = useState<string>(".fastq");
	const [isUploading, setIsUploading] = useState<boolean>(false);

	const uploadingFiles: UploadingFile[] = [
		{ fileName: "Wellness_Summary_JohnDoe.pdf", percentage: 18 },
		{ fileName: "Metabolism_Report_2024.pdf", percentage: 82 },
	];

	const UploadScreen = () => {
		return (
			<div className={styles["import-upload-file-uploader"]}>
				<div className={styles["icon-wrapper"]}>
					<GroupIcon />
				</div>
				<div className={styles["text-wrapper"]}>
					<span className={styles["label"]}>
						Click or drag file to this area to upload
					</span>
					<span className={styles["description"]}>2 files (max. 10mb)</span>
				</div>
				<button
					className={styles["import-upload-button"]}
					onClick={() => setIsUploading(!isUploading)}
				>
					Browse files
				</button>
			</div>
		);
	};

	const UploadProgressScreen = () => {
		return (
			<div className={styles["import-upload-progress-wrapper"]}>
				<div className={styles["uploader"]}>
					<div className={styles["info-wrapper"]}>
						<div className={styles["icon-wrapper"]}>
							<FuselabIcon />
						</div>
						<div className={styles["text-wrapper"]}>
							<span className={styles["label"]}>
								Click or drag file to this area to upload
							</span>
							<span className={styles["description"]}>2 files (max. 10mb)</span>
						</div>
					</div>
					<button className={styles["import-upload-button"]}>
						Browse files
					</button>
				</div>
			</div>
		);
	};

	const UploadingFile = () => {
		return (
			<>
				{uploadingFiles.map((file) => (
					<div className={styles["uploading-file-wrapper"]}>
						<LoaderIcon />
						<div className={styles["uploading-info"]}>
							<div className={styles["title-wrapper"]}>
								<span className={styles["title"]}>{file.fileName}</span>
								<span className={styles["percentage"]}>{file.percentage}%</span>
							</div>
							<div className={styles["progressbar"]}>
								<div
									className={styles["filled"]}
									style={{ width: `${file.percentage}%` }}
								></div>
							</div>
						</div>
						<FuselabIcon />
					</div>
				))}
			</>
		);
	};

	return (
		<div className={styles["import-upload-container"]}>
			<div className={styles["import-upload-body"]}>
				<div className={styles["import-upload-info"]}>
					<div className={styles["title"]}>Upload Files</div>
					<div className={styles["description"]}>
						Upload relevant medical and personal documents: Medical reports,
						Test Results.
					</div>
				</div>
				<div className={styles["import-upload-segment-control"]}>
					{FileTypes.map((type) => (
						<div
							className={`${styles["segment-control-item"]} ${type === selectedFileType ? styles["selected-segment-control-item"] : ""}`}
							onClick={() => setSelectedFileType(type)}
						>
							{type}
						</div>
					))}
				</div>
				{!isUploading ? (
					<UploadScreen />
				) : (
					<>
						<UploadProgressScreen />
						<UploadingFile />
					</>
				)}
			</div>
			<ConfigControl selectedItem={ConfigControlItems.UploadFiles} />
		</div>
	);
};

export default ImportOrUpload;
