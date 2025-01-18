import BottleIcon from "@assets/PlanWidget/Bottle.svg?react";
import MicroscopeIcon from "@assets/PlanWidget/Microscope.svg?react";
import Shape from "@assets/PlanWidget/Shape.svg?react";
import styles from "./CtaBlock.module.scss";

type CtaBlockProps = {
	title: string;
	desc: string;
};

export const CtaBlock = ({ title, desc }: CtaBlockProps) => {
	return (
		<div className={styles["CtaBlock-container"]}>
			<div className={styles["CtaBlock-icon"]}>
				<BottleIcon />
			</div>
			<div className={styles["CtaBlock-body"]}>
				<div className={styles["CtaBlock-title"]}>
					{title}
					<Shape className={styles["CtaBlock-shape"]} />
				</div>
				<p className={styles["CtaBlock-desc"]}>{desc}</p>
			</div>
			<button className={styles["CtaBlock-button"]}>
				<div className={styles["CtaBlock-button-text"]}>Get Started</div>
				<div className={styles["CtaBlock-button-icon"]}>
					<MicroscopeIcon />
				</div>
			</button>
		</div>
	);
};
