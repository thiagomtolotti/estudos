import { useForgotPassword } from "@/hooks/useForgotPassword";
import { FormEvent, useRef } from "react";
// import styles from "./ForgotPasswordForm.module.css";

interface ForgotPasswordFormProps {
	submit: (email: string) => void;
}

export const ForgotPasswordForm = ({ submit }: ForgotPasswordFormProps) => {
	const emailRef = useRef<HTMLInputElement>(null);

	function handleSubmit(ev: FormEvent) {
		ev.preventDefault();

		if (!emailRef.current?.value) {
			console.error("Insira um endereço de email");
			return;
		}

		submit(emailRef.current.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="email" placeholder="email" ref={emailRef} />

			<button>Enviar</button>
		</form>
	);
};
