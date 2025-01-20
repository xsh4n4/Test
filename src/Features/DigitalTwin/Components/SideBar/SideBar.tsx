import styles from "./SideBar.module.scss";

import AlergyIcon from "@assets/SideBar/Icons/allergy.svg?react";
import CardioLoadIcon from "@assets/SideBar/Icons/heart.svg?react";
import ClinicalNotesIcon from "@assets/SideBar/Icons/default.svg?react";
import EndocrinologyIcon from "@assets/SideBar/Icons/Neck.svg?react";
import GastroenterolgyIcon from "@assets/SideBar/Icons/Lungs.svg?react";
import GynecologyIcon from "@assets/SideBar/Icons/gynecology.svg?react";
import HematologyIcon from "@assets/SideBar/Icons/hematology.svg?react";
import NephrologyIcon from "@assets/SideBar/Icons/nephrology.svg?react";
import OxygenSaturationIcon from "@assets/SideBar/Icons/oxygen_saturation.svg?react";
import Pulmonology1Icon from "@assets/SideBar/Icons/Kindeys.svg?react";
import PulmonologyIcon from "@assets/SideBar/Icons/Stomach.svg?react";
import HeadIcon from "@assets/SideBar/Icons/head.svg?react";
import UlnaRadiusAltIcon from "@assets/SideBar/Icons/ulna_radius_alt.svg?react";
import UrologyIcon from "@assets/SideBar/Icons/urology.svg?react";
import IconButton from "./Components/IconButton/IconButton";
import { useCamera } from "../../Context/CameraContext";
import Dropdown from "../../Dropdown/Dropdown";
import { useDispatch } from "react-redux";
import { setCategory } from "@/App/Redux/categorySlice";
import React from "react";

type DropdownValue = "total" | "cardio";

interface SideBarProps {
	onModelChange: (type: "body" | "cardio") => void;
}

const SideBar = ({ onModelChange }: SideBarProps) => {
	const { setCameraState } = useCamera();
	const dispatch = useDispatch();
	const [activeButton, setActiveButton] =
		React.useState<string>("ClinicalNotes");
	const [dropdownValue, setDropdownValue] =
		React.useState<DropdownValue>("total");

	// const selectedCategory = useSelector(
	// 	(state: any) => state.category.selectedCategory,
	// );

	const handleCategoryChange = (category: string) => {
		dispatch(setCategory(category)); // Dispatch action to update the selected category
	};

	const handleZoom = (bodyPart: string) => {
		const zoomConfigs = {
			ClinicalNotes: { position: [0, 0, 200], zoom: 10 },
			StressManagement: { position: [0, 30, 200], zoom: 40 },
			CardioLoad: { position: [0, 85, 200], zoom: 10 },
			Pulmonology: { position: [0, 10, 200], zoom: 43 },
			Gastroenterolgy: { position: [0, 7, 200], zoom: 45 },
			Endocrinology: { position: [0, 25, 200], zoom: 45 },
			Pulmonology1: { position: [0, -15, 200], zoom: 17 },
		};

		setActiveButton(bodyPart);

		const config = zoomConfigs[bodyPart as keyof typeof zoomConfigs];
		if (config) {
			setCameraState({
				targetPosition: config.position as [number, number, number],
				targetZoom: config.zoom,
			});
		}

		if (bodyPart === "CardioLoad") {
			handleCategoryChange("cardiovascular");
			onModelChange("cardio");
		} else {
			handleCategoryChange("total");
			onModelChange("body");
		}
	};

	// Handle dropdown value changes
	const handleDropdownChange = (value: DropdownValue) => {
		setDropdownValue(value);
		if (value === "total") {
			handleZoom("ClinicalNotes");
			onModelChange("body");
		} else if (value === "cardio") {
			handleZoom("CardioLoad");
			onModelChange("cardio");
		}
	};

	const buttons = [
		{ text: "ClinicalNotes", icon: <ClinicalNotesIcon /> },
		{ text: "CardioLoad", icon: <CardioLoadIcon />, count: 3 },
		{ text: "StressManagement", icon: <HeadIcon /> },
		{ text: "Pulmonology", icon: <PulmonologyIcon /> },
		{ text: "Gastroenterolgy", icon: <GastroenterolgyIcon /> },
		{ text: "Endocrinology", icon: <EndocrinologyIcon /> },
		{ text: "Pulmonology1", icon: <Pulmonology1Icon /> },
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
			<Dropdown value={dropdownValue} onChange={handleDropdownChange} />
			{buttons.map((data, index) => (
				<IconButton
					key={data.text}
					onClick={() => {
						handleZoom(data.text);
						if (data.text === "ClinicalNotes") {
							setDropdownValue("total");
						} else if (data.text === "CardioLoad") {
							setDropdownValue("cardio");
						}
					}}
					active={activeButton === data.text}
					disabled={index > 1}
				>
					{data.count && (
						<span className={styles["SideBar-count"]}>{data.count}</span>
					)}
					{data.icon}
				</IconButton>
			))}
		</div>
	);
};

export default SideBar;
