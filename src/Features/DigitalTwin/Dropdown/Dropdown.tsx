import { useState } from "react";
import styles from "./Dropdown.module.scss";
import { ChevronDown } from "lucide-react";
import { useCamera } from "../Context/CameraContext";

interface DropdownOption {
	label: string;
	value: "total" | "cardio";
}

const options: DropdownOption[] = [
	{ label: "Total Health", value: "total" },
	{ label: "Cardiovascular", value: "cardio" },
];

interface DropdownProps {
	value: "total" | "cardio";
	onChange: (value: "total" | "cardio") => void;
}

const Dropdown = ({ value, onChange }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const { setCameraState } = useCamera();

	const selected =
		options.find((option) => option.value === value) || options[0];

	const handleSelect = (option: DropdownOption) => {
		onChange(option.value);
		setIsOpen(false);

		const zoomConfigs = {
			total: { position: [0, 0, 200] as [number, number, number], zoom: 10 },
			cardio: { position: [0, 23, 200] as [number, number, number], zoom: 30 },
		};

		const config = zoomConfigs[option.value];
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
					<div className={styles.divider} />
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
