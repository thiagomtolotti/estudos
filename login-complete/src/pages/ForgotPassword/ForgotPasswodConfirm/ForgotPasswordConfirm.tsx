interface ForgotPasswodConfirmProps {
  email: string;
}

export function ForgotPasswordConfirm({ email }: ForgotPasswodConfirmProps) {
  return (
    <p data-testid="confirm-email-sent">
      Um email com o link para definir a nova senha foi enviado para{" "}
      <strong>{email}</strong>
    </p>
  );
}
