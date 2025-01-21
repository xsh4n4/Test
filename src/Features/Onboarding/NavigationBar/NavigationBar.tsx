import { useNavigate } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import ArrowRightIcon from "@assets/General/ArrowRight.svg?react";
import LeftIcon from "@assets/General/Left.svg?react";
import { paths } from "@/App/Routes/Paths";

interface NavigationBarProps {
	processed?: boolean;
	setIsOpenedConfirmModal: (open: boolean) => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
	processed,
	setIsOpenedConfirmModal,
}) => {
	const navigate = useNavigate();
	return (
		<div className={styles["navigation-bar-container"]}>
			<button
				className={styles["back"]}
				onClick={() => {
					navigate(paths.config.root);
				}}
			>
				<LeftIcon /> Back
			</button>
			<button
				className={styles["submit"]}
				onClick={() => {
					if (!processed) {
						setIsOpenedConfirmModal(true);
					} else {
						navigate(paths.dashboard);
					}
				}}
			>
				{processed ? "Proceed to Digital twin" : "Submit My Health Data"}{" "}
				<ArrowRightIcon />
			</button>
		</div>
	);
};
