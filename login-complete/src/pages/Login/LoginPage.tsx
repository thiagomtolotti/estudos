"use client";

import Link from "next/link";
import styles from "./login.module.css";

import LoginForm from "./LoginForm";

export function LoginPage() {
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
