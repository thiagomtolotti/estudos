import { FormEvent, useRef } from "react";
// import styles from "./ForgotPasswordForm.module.css";

interface ForgotPasswordFormProps {
  onSubmit(email: string): void;
}

export const ForgotPasswordForm = ({ onSubmit }: ForgotPasswordFormProps) => {
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    if (!emailRef.current?.value) {
      console.error("Insira um endereço de email");
      return;
    }

    onSubmit(emailRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="email" ref={emailRef} />

      <button>Enviar</button>
    </form>
  );
};
