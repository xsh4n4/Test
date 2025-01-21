import { useState } from "react";
import styles from "./LoginForm.module.scss";
import PasswordHidden from "@assets/Auth/PasswordHidden.svg?react";
import CheckMark from "@assets/Auth/CheckMark.svg?react";
import { useNavigate } from "react-router-dom";
import { paths } from "@/App/Routes/Paths";
import { toast } from "react-toastify";

export const LoginForm = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [hidePassword, setHidePassword] = useState(true);

	const fakeUser = {
		email: "admin@prepaire.com",
		password: "PREPAIRE@123",
	};

	const handleLogin = () => {
		if (email === fakeUser.email && password === fakeUser.password) {
			navigate(paths.config.root);
			toast.success("Successfully logged in");
		} else {
			toast.error("Invalid email or password");
		}
	};

	return (
		<div className={styles["Auth-content-form"]}>
			<div className={styles["Auth-content-form-title"]}>
				<h2>Sign In</h2>
				<h4>Sign in if you already have an account.</h4>
			</div>

			<div className={styles["Auth-content-form-inputs"]}>
				<input
					type='email'
					placeholder='Email address'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<div className={styles["Auth-content-form-inputs-password-wrapper"]}>
					<input
						type={hidePassword ? "password" : "text"}
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
				onClick={handleLogin}
			>
				Sign In <CheckMark />
			</button>
			<div className={styles["Auth-content-form-signup"]}>
				Don’t have an account? <a href='/register'>Sign Up</a>
			</div>
		</div>
	);
};
