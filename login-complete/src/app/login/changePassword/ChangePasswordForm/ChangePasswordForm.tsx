import { FormEvent, useRef } from "react";

interface ChangePasswordFormProps {
	onSubmit(newPass: string): void;
}

export const ChangePasswordForm = ({ onSubmit }: ChangePasswordFormProps) => {
	const newPassRef = useRef<HTMLInputElement>(null);
	const confirmNewPassRef = useRef<HTMLInputElement>(null);

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
			<input type="text" placeholder="Nova senha" ref={newPassRef} />
			<input
				type="text"
				placeholder="Confirme a nova senha"
				ref={confirmNewPassRef}
			/>

			<button>Redefinir a senha</button>
		</form>
	);
};
