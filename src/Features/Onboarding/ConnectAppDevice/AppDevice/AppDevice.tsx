import styles from "./AppDevice.module.scss";
import { AppCard } from "./Components/AppCard/AppCard";
import ImageA from "@assets/General/OMRON_Logo 1.png";
import ImageB from "@assets/General/Apple_logo_black 1.png";
import ImageC from "@assets/General/Qardio 1.png";
import ImageD from "@assets/General/g11533.png";
import ImageE from "@assets/General/qura-ring-seeklogo 1.png";
import ImageF from "@assets/General/logo 1.png";
import ImageG from "@assets/General/withings-health-solutions-logo 1.png";
import EHRsDatabase from "@assets/General/EHRDatabase.svg";

export const AppDevice = () => {
	const apps = [
		{
			img: EHRsDatabase,
			title: "EHRs Database",
			description: "Digital health records",
		},
		{
			img: ImageA,
			title: "Omron",
			description: "Platinum / Evolv / Complete",
		},
		{
			img: ImageB,
			title: "Apple",
			description: "Wathc Series / Ultra / SE / Nike",
		},
		{
			img: ImageC,
			title: "Qardio",
			description: "QardioBase, QardioCore, QardioArm",
		},
		{
			img: ImageD,
			title: "Huawei",
			description: "Watch GT 5, Band 8, Scale 3",
		},
		{
			img: ImageE,
			title: "OURA",
			description: "Ring Gen 2, Rign Gen 3",
		},
		{
			img: ImageF,
			title: "FreeStyle",
			description: "Libre2 / 3 (Glocose Monitor)",
		},
		{
			img: ImageG,
			title: "Witings E",
			description: "Body+, BPM Core, Sleep Analyzer",
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
