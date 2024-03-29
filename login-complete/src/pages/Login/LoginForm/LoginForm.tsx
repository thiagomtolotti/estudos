import { useLogin } from "@/hooks/useLogin";
import styles from "./LoginForm.module.css";
import { FormEvent, useRef } from "react";

export const LoginForm = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passRef = useRef<HTMLInputElement>(null);
	const rememberMe = useRef<HTMLInputElement>(null);

	const submit = useLogin();

	function handleSubmit(ev: FormEvent) {
		ev.preventDefault();

		const emailValue = emailRef.current?.value;
		const passValue = passRef.current?.value;

		if (!emailValue || !passValue) {
			console.error("É necessário fornecer um email e senha");
			return;
		}

		submit(emailValue, passValue, Boolean(rememberMe.current?.checked));
	}

	return (
		<form onSubmit={handleSubmit} className={styles.loginForm}>
			<input type="email" placeholder="email" ref={emailRef} />
			<input type="password" placeholder="senha" ref={passRef} />

			<span className={styles.rememberMe}>
				<input
					type="checkbox"
					name="remember-me"
					id="remember-me"
					ref={rememberMe}
				/>
				<label htmlFor="remember-me">Lembre de mim</label>
			</span>

			<button>Login</button>
		</form>
	);
};
