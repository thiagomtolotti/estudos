import styles from "./ChangePasswordForm.module.css";
import { FormEvent, useRef, useState } from "react";

interface ChangePasswordFormProps {
	onSubmit(newPass: string): void;
}

export const ChangePasswordForm = ({ onSubmit }: ChangePasswordFormProps) => {
	const newPassRef = useRef<HTMLInputElement>(null);
	const confirmNewPassRef = useRef<HTMLInputElement>(null);
	const [showPass, setShowPass] = useState(false);

	function handleSubmit(ev: FormEvent) {
		ev.preventDefault();

		if (!newPassRef.current?.value || !confirmNewPassRef.current?.value) {
			console.error("Os campos devem estar preenchidos corretamente");

			return;
		}

		if (newPassRef.current.value !== confirmNewPassRef.current.value) {
			console.error("As senhas devem coincidir entre si");

			return;
		}

		onSubmit(newPassRef.current.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type={showPass ? "text" : "password"}
				placeholder="Nova senha"
				ref={newPassRef}
				autoComplete="new-password"
			/>
			<input
				type={showPass ? "text" : "password"}
				placeholder="Confirme a nova senha"
				ref={confirmNewPassRef}
				autoComplete="new-password"
			/>

			<span className={styles.showPass}>
				<input
					type="checkbox"
					name="show-pass"
					id="show-pass"
					data-testid="show-pass"
					checked={showPass}
					onChange={() => {
						setShowPass((showPass) => !showPass);
					}}
				/>
				<label htmlFor="show-pass">Mostrar as senhas</label>
			</span>

			<button>Redefinir a senha</button>
		</form>
	);
};
