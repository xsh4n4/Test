import Navigation from "./Components/Navigation/Navigation";
import Logo from "@assets/General/LogoGenetiq.svg?react";
import styles from "./Navbar.module.scss";
import NotificationHub from "./Components/NotificationsHub/NotificationsHub";
import Profile from "./Components/Profile/Profile";

const NavBar = () => {
	return (
		<div className={styles["navbar-container"]}>
			<div className={styles["logo-wrapper"]}>
				<Logo />
			</div>
			<Navigation />
			<div className={styles["actions-container"]}>
				<NotificationHub IsBadge={true} />
				<Profile />
			</div>
		</div>
	);
};

export default NavBar;
