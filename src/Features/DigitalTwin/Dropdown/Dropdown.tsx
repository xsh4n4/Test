import { useState } from "react";
import styles from "./Dropdown.module.scss";
import { ChevronDown } from "lucide-react";
import { useCamera } from "../Context/CameraContext";

interface DropdownOption {
	label: string;
	value: string;
}

const options: DropdownOption[] = [
	{ label: "Total Health", value: "total" },
	{ label: "Upper Body", value: "upper" },
	{ label: "Lower Body", value: "lower" },
];

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(options[0]);
	const { setCameraState } = useCamera();

	const handleSelect = (option: DropdownOption) => {
		setSelected(option);
		setIsOpen(false);

		const zoomConfigs = {
			total: { position: [0, 0, 200] as [number, number, number], zoom: 10 },
			upper: { position: [0, 30, 200] as [number, number, number], zoom: 15 },
			lower: { position: [0, -30, 200] as [number, number, number], zoom: 15 },
		};

		const config = zoomConfigs[option.value as keyof typeof zoomConfigs];
		if (config) {
			setCameraState({
				targetPosition: config.position,
				targetZoom: config.zoom,
			});
		}
	};

	return (
		<div className={styles.dropdown}>
			<button
				className={styles.trigger}
				onClick={() => setIsOpen(!isOpen)}
				type='button'
			>
				<div className={styles.labelContainer}>
					<div className={styles.label}>{selected.label}</div>
					<div className={styles.divider} /> {/* Divider */}
					<ChevronDown
						className={`${styles.icon} ${isOpen ? styles.rotated : ""}`}
						size={16}
					/>
				</div>
			</button>

			{isOpen && (
				<div className={styles.menu}>
					{options.map((option) => (
						<button
							key={option.value}
							className={styles.option}
							onClick={() => handleSelect(option)}
							type='button'
						>
							{option.label}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
