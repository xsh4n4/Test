import { CircleProgressBar } from "./Components/ProgressBar/ProgressBar";
import { UploadProcesser } from "./Components/UploadProcesser/UploadProcesser";
import styles from "./UploadProcess.module.scss";

export const UploadProcess = () => {
	return (
		<div className={styles["upload-process-container"]}>
			<div className={styles["left-side"]}>
				<CircleProgressBar progress={52} />
				<div className={styles["upload-container"]}>
					<div className={styles["upload-info"]}>
						<div className={styles["title"]}>
							Your files are being processed.
						</div>
						<div className={styles["description"]}>
							Sit back and relax while we generate your healthcare digital twin!
							This should take (only a few minutes/up to 30 mins). We will
							notify you hudson@email.com as soon as its ready!
						</div>
					</div>
					<div className={styles["processer-container"]}>
						<UploadProcesser
							fileName='Wellness_Summary_JohnDoe.pdf'
							status='done'
						/>
						<UploadProcesser
							fileName='Metabolism_Report_2024.pdf'
							status='uploading'
						/>
					</div>
				</div>
			</div>
			<div className={styles["right-side"]}></div>
		</div>
	);
};
