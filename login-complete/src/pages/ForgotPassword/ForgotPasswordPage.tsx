"use client";

import { useState } from "react";
import styles from "./ForgotPassword.module.css";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ForgotPasswordConfirm from "./ForgotPasswodConfirm";

export function ForgotPasswordPage() {
	const [emailSent, setEmailSent] = useState<string>("");

	function sendEmail(email: string) {
		//Envia o email

		setEmailSent(email);
	}

	return (
		<div className={styles.container}>
			<h1>Esqueci a senha</h1>

			{!emailSent ? (
				<ForgotPasswordForm onSubmit={sendEmail} />
			) : (
				<ForgotPasswordConfirm email={emailSent} />
			)}
		</div>
	);
}
