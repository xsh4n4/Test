import styles from "./IconButton.module.scss";

export const IconButton = ({
	children,
	onClick = () => null,
}: {
	children: React.ReactNode;
	onClick?: () => void;
}) => {
	return (
		<button onClick={onClick} className={styles["icon-button"]}>
			{children}
		</button>
	);
};

export default IconButton;
