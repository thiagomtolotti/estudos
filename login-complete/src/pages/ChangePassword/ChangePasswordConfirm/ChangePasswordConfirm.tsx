import Link from "next/link";

export const ChangePasswordConfirm = () => {
	return (
		<div>
			<p>
				Sua senha foi alterada corretamente, agora é só fazer o login.
			</p>

			<Link href={"/login"} data-testid="login-button">
				<button>Voltar ao login</button>
			</Link>
		</div>
	);
};
