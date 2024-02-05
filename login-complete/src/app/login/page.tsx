import Link from "next/link";
import styles from "./login.module.css";

import LoginForm from "./components/LoginForm";

export default function Login() {
	return (
		<div className={styles.login}>
			<h1>Login</h1>

			<LoginForm />

			<Link href={"/login/forgotPassword"} data-testid="forgot-password">
				<button className="button-clear">Esqueci minha senha</button>
			</Link>
		</div>
	);
}
