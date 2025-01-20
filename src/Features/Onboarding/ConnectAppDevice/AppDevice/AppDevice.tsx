import styles from "./AppDevice.module.scss";
import { AppCard } from "./Components/AppCard/AppCard";
import ImageA from "@assets/General/Type.png";

export const AppDevice = () => {
	const apps = [
		{
			img: ImageA,
			title: "EHRs Database",
			description: "Digital health records",
		},
		{
			img: ImageA,
			title: "EHRs Database",
			description: "Digital health records",
		},
		{
			img: ImageA,
			title: "EHRs Database",
			description: "Digital health records",
		},
		{
			img: ImageA,
			title: "EHRs Database",
			description: "Digital health records",
		},
		{
			img: ImageA,
			title: "EHRs Database",
			description: "Digital health records",
		},
	];
	return (
		<div className={styles["app-container"]}>
			{apps.map((app) => (
				<AppCard {...app} />
			))}
		</div>
	);
};
