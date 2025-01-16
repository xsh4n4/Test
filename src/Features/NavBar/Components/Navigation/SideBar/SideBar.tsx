import styles from "./SideBar.module.scss";

import AlergyIcon from "@assets/SideBar/Icons/allergy.svg?react";
import CardioLoadIcon from "@assets/SideBar/Icons/cardio_load.svg?react";
import ClinicalNotesIcon from "@assets/SideBar/Icons/clinical_notes.svg?react";
import EndocrinologyIcon from "@assets/SideBar/Icons/endocrinology.svg?react";
import GastroenterolgyIcon from "@assets/SideBar/Icons/gastroenterology.svg?react";
import GynecologyIcon from "@assets/SideBar/Icons/gynecology.svg?react";
import HematologyIcon from "@assets/SideBar/Icons/hematology.svg?react";
import NephrologyIcon from "@assets/SideBar/Icons/nephrology.svg?react";
import OxygenSaturationIcon from "@assets/SideBar/Icons/oxygen_saturation.svg?react";
import Pulmonology1Icon from "@assets/SideBar/Icons/pulmonology-1.svg?react";
import PulmonologyIcon from "@assets/SideBar/Icons/pulmonology.svg?react";
import StressManagementIcon from "@assets/SideBar/Icons/stress_management.svg?react";
import UlnaRadiusAltIcon from "@assets/SideBar/Icons/ulna_radius_alt.svg?react";
import UrologyIcon from "@assets/SideBar/Icons/urology.svg?react";
import IconButton from "./Components/IconButton/IconButton";
import { useCamera } from "../../../../DigitalTwin/Context/CameraContext";
import Dropdown from "../../../../DigitalTwin/Dropdown/Dropdown";

const SideBar = () => {
	const { setCameraState } = useCamera();

	const handleZoom = (bodyPart: string) => {
		const zoomConfigs = {
			ClinicalNotes: { position: [0, 0, 200], zoom: 10 }, // Default view
			StressManagement: { position: [0, 33, 200], zoom: 40 }, // Head
			CardioLoad: { position: [0, 20, 200], zoom: 40 }, // Chest
			Pulmonology: { position: [0, 12, 200], zoom: 35 }, // Lungs
			Gastroenterolgy: { position: [0, 10, 200], zoom: 35 }, // Stomach
			Endocrinology: { position: [0, 30, 200], zoom: 45 }, // Neck
			Pulmonology1: { position: [0, -10, 200], zoom: 17 }, // Lower body
		};

		const config = zoomConfigs[bodyPart as keyof typeof zoomConfigs];
		if (config) {
			setCameraState({
				targetPosition: config.position as [number, number, number],
				targetZoom: config.zoom,
			});
		}
	};
	const buttons = [
		{ text: "ClinicalNotes", icon: <ClinicalNotesIcon /> },
		{ text: "StressManagement", icon: <StressManagementIcon /> },
		{ text: "CardioLoad", icon: <CardioLoadIcon />, count: 2 },
		{ text: "Pulmonology", icon: <PulmonologyIcon /> },
		{ text: "Gastroenterolgy", icon: <GastroenterolgyIcon />, count: 3 },
		{ text: "Endocrinology", icon: <EndocrinologyIcon /> },
		{ text: "Pulmonology1", icon: <Pulmonology1Icon />, count: 5 },
		{ text: "Urology", icon: <UrologyIcon /> },
		{ text: "UlnaRadiusAlt", icon: <UlnaRadiusAltIcon /> },
		{ text: "Gynecology", icon: <GynecologyIcon /> },
		{ text: "Hematology", icon: <HematologyIcon /> },
		{ text: "Nephrology", icon: <NephrologyIcon /> },
		{ text: "Alergy", icon: <AlergyIcon /> },
		{ text: "OxygenSaturation", icon: <OxygenSaturationIcon /> },
	];
	return (
		<div className={styles["SideBar-container"]}>
			<Dropdown />
			{buttons.map((data) => (
				<IconButton key={data.text} onClick={() => handleZoom(data.text)}>
					{data.count && <span className='count'>{data.count}</span>}
					{data.icon}
				</IconButton>
			))}
		</div>
	);
};

export default SideBar;
