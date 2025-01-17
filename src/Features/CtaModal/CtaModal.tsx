import ReactDOM from "react-dom";
import styles from "./CtaModal.module.scss";
import Cross from "@assets/CtaModal/Cross.svg?react";
import Cart from "@assets/CtaModal/Cart.svg?react";
import { useState } from "react";

const CtaModal = () => {
	const [isClosed, setIsClosed] = useState(false);

	if (isClosed) {
		return null;
	}
	return ReactDOM.createPortal(
		<div className={styles["CtaModal-container"]}>
			<div className={styles["CtaModal-head"]}>
				<div className={styles["CtaModal-head-text"]}>
					<div className={styles["CtaModal-number"]}>16</div>
					<div className={styles["CtaModal-title"]}>New insights</div>
				</div>
				<div
					className={styles["CtaModal-cross-container"]}
					onClick={() => setIsClosed(true)}
				>
					<Cross />
				</div>
			</div>
			<div className={styles["CtaModal-body"]}>
				<p className={styles["CtaModal-description"]}>
					Discover new health insights to better understand and enhance your
					wellness.
				</p>
			</div>
			<button className={styles["CtaModal-button"]}>
				<p className={styles["CtaModal-button-text"]}>Order DNA Test</p>
				<div className={styles["CtaModal-cart-container"]}>
					<Cart />
				</div>
			</button>
		</div>,
		document.body,
	);
};

export default CtaModal;
