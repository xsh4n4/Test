import styles from "./UploadFiles.module.scss";
import UploadGroupIcon from "@assets/General/UploadGroup.svg?react";
import ShoppingCartPlusIcon from "@assets/General/ShoppingCartPlus.svg?react";
import { UploadItem, UploadItemProps } from "../UploadItem/UploadItem";
import { UploadFileTypes } from "@/App/Consts";

export const UploadFiles = () => {
	return (
		<div className={styles["upload-body"]}>
			<div className={styles["left-side"]}>
				<div className={styles["upload-info"]}>
					<div className={styles["title"]}>Upload Files</div>
					<div className={styles["description"]}>
						Upload relevant medical and personal documents: Medical reports,
						Test Results.
					</div>
				</div>
				<div className={styles["upload-items"]}>
					{Object.keys(UploadFileTypes).map((fileType) => (
						<UploadItem
							{...(UploadFileTypes[
								fileType as keyof typeof UploadFileTypes
							] as UploadItemProps)}
						/>
					))}
				</div>
			</div>
			<div className={styles["right-side"]}>
				<div className={styles["content"]}>
					<UploadGroupIcon />
					<div className={styles["info"]}>
						<div className={styles["title"]}>Don’t have any data?</div>
						<div className={styles["description"]}>
							No problem! Order these genetic tests to get insights into your
							health.
						</div>
					</div>
				</div>
				<button className={styles["order-test-btn"]}>
					Order Tests <ShoppingCartPlusIcon />
				</button>
			</div>
		</div>
	);
};
