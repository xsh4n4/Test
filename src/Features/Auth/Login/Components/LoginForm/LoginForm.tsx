import { useState } from "react";
import styles from "./LoginForm.module.scss";
import PasswordHidden from "@assets/Auth/PasswordHidden.svg?react";
import CheckMark from "@assets/Auth/CheckMark.svg?react";
import { useNavigate } from "react-router-dom";
import { paths } from "@/App/Routes/Paths";

export const LoginForm = () => {
	const navigate = useNavigate();
	const [hidePassword, setHidePassword] = useState(true);

	return (
		<div className={styles["Auth-content-form"]}>
			<div className={styles["Auth-content-form-title"]}>
				<h2>Sign In</h2>
				<h4>Sign in if you already have an account.</h4>
			</div>

			<div className={styles["Auth-content-form-inputs"]}>
				<input type='email' placeholder='Email address' />

				<div className={styles["Auth-content-form-inputs-password-wrapper"]}>
					<input
						type={hidePassword ? "password" : "text"}
						placeholder='Password'
					/>
					<div className={styles["Auth-content-form-inputs-password-hidden"]}>
						<PasswordHidden onClick={() => setHidePassword(!hidePassword)} />
					</div>
				</div>
			</div>
			<div className={styles["Auth-content-form-forgot-password"]}>
				<a href='#'>Forgot password?</a>
			</div>

			<button
				className={styles["Auth-content-form-signin-button"]}
				onClick={() => navigate(paths.config.root)}
			>
				Sign In <CheckMark />
			</button>
			<div className={styles["Auth-content-form-signup"]}>
				Don’t have an account? <a href='/register'>Sign Up</a>
			</div>
		</div>
	);
};
