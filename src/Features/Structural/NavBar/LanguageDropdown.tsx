import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		i18n.changeLanguage(e.target.value);
		localStorage.setItem("lang", e.target.value);
	};

	return (
		<select
			onChange={changeLanguage}
			value={i18n.language}
			style={{
				padding: "6px 10px",
				borderRadius: "8px",
				border: "1px solid #ccc",
				backgroundColor: "white",
				cursor: "pointer",
				marginLeft: "auto",
			}}
		>
			<option value='en'>English</option>
			<option value='es'>Español</option>
			<option value='fr'>Français</option>
		</select>
	);
};

export default LanguageDropdown;
