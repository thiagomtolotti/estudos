import {
	fireEvent,
	render,
	RenderResult,
	screen,
} from "@testing-library/react";
import { ChangePasswordPage } from "./ChangePasswordPage";

describe("Change Password page", () => {
	let newPassInput: HTMLInputElement,
		confirmNewPassInput: HTMLInputElement,
		sendButton: HTMLButtonElement;
	let page: RenderResult;

	beforeEach(() => {
		page = render(<ChangePasswordPage />);

		newPassInput = screen.getByPlaceholderText("Nova senha");
		confirmNewPassInput = screen.getByPlaceholderText(
			"Confirme a nova senha"
		);
		sendButton = screen.getByRole("button");
	});

	it("Should render correctly", () => {
		expect(page.container).toMatchSnapshot();
	});

	it("Should change stages when the new password is set", () => {
		const newPass = "123456";

		fireEvent.input(newPassInput, { target: { value: newPass } });
		fireEvent.input(confirmNewPassInput, { target: { value: newPass } });
		fireEvent.click(sendButton);

		expect(sendButton).not.toBeInTheDocument();
	});
});
