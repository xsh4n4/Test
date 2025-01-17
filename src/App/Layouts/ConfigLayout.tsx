import { ConfigControl } from "@/Features/ConfigControl/ConfigControl";
import { Outlet } from "react-router-dom";
import Logo from "@assets/General/LogoGenetiq.svg?react";
import styles from "./ConfigLayout.module.scss";

export const ConfigLayout = () => {
	return (
		<div className={styles["Config-container"]}>
			<div className={styles["logo-wrapper"]}>
				<Logo />
			</div>
			<Outlet />
			<ConfigControl />
		</div>
	);
};
