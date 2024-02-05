"use client";

import ChangePasswordForm from "./ChangePasswordForm";
import styles from "./ChangePasswordPage.module.css";

export default function ChangePasswordPage() {
	return (
		<div className={styles.container}>
			<h1>Mudar a senha</h1>

			<ChangePasswordForm />
		</div>
	);
}
