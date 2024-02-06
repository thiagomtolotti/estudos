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
			/>
			<input
				type={showPass ? "text" : "password"}
				placeholder="Confirme a nova senha"
				ref={confirmNewPassRef}
			/>

			<span>
				<input
					type="checkbox"
					name="show-pass"
					id="show-pass"
					data-testid="show-pass"
					onInput={(ev) =>
						setShowPass((ev.target as HTMLInputElement).checked)
					}
				/>
				<label htmlFor="show-pass">Mostrar as senhas</label>
			</span>

			<button>Redefinir a senha</button>
		</form>
	);
};
