"use client";

import { useState } from "react";
import styles from "./ForgotPassword.module.css";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ForgotPasswordConfirm from "./ForgotPasswodConfirm";
import { useForgotPassword } from "@/hooks/useForgotPassword";

export function ForgotPasswordPage() {
	const [emailSent, setEmailSent] = useState("");

	const submit = useForgotPassword();

	function sendEmail(email: string) {
		//Envia o email
		submit(email);

		setEmailSent(email);
	}

	return (
		<div className={styles.container}>
			<h1>Esqueci a senha</h1>

			{!emailSent ? (
				<ForgotPasswordForm submit={sendEmail} />
			) : (
				<ForgotPasswordConfirm email={emailSent} />
			)}
		</div>
	);
}
