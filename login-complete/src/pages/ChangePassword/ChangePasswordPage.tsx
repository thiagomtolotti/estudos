"use client";

import { useState } from "react";
import ChangePasswordForm from "./ChangePasswordForm";
import styles from "./ChangePasswordPage.module.css";
import ChangePasswordConfirm from "./ChangePasswordConfirm";

export function ChangePasswordPage() {
	const [hasSetNewPassword, setHasSetNewPassword] = useState(false);

	function sendNewPassword() {
		setHasSetNewPassword(true);
	}

	return (
		<div className={styles.container}>
			<h1>Mudar a senha</h1>

			{!hasSetNewPassword ? (
				<ChangePasswordForm onSubmit={sendNewPassword} />
			) : (
				<ChangePasswordConfirm />
			)}
		</div>
	);
}
