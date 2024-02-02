import styles from "./login.module.css";

import LoginForm from "./LoginForm";

export default function Login() {
	return (
		<div className={styles.login}>
			<h1>Login</h1>

			<LoginForm />

			<button className="button-clear">Esqueci minha senha</button>
		</div>
	);
}
