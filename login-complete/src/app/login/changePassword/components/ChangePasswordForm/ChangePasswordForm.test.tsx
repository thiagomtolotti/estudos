import { fireEvent, render, screen } from "@testing-library/react";
import ChangePasswordForm from ".";

describe("ChangePasswordForm", () => {
	let newPassInput: HTMLInputElement,
		confirmNewPassInput: HTMLInputElement,
		showPass: HTMLInputElement,
		sendButton: HTMLButtonElement;
	const onSubmitMock = jest.fn();

	beforeEach(() => {
		render(<ChangePasswordForm onSubmit={onSubmitMock} />);

		newPassInput = screen.getByPlaceholderText("Nova senha");
		confirmNewPassInput = screen.getByPlaceholderText(
			"Confirme a nova senha"
		);
		sendButton = screen.getByRole("button");
		showPass = screen.getByTestId("show-pass");
	});

	it("Should contain a new password field, a confirm field and a button to change the password", () => {
		expect(newPassInput).toBeInTheDocument();
		expect(confirmNewPassInput).toBeInTheDocument();
		expect(sendButton).toBeInTheDocument();
	});

	it("Should throw an error if any of the fields are empty", () => {
		const newPassword = "123456";

		fireEvent.input(newPassInput, { target: { value: newPassword } });

		fireEvent.click(sendButton);

		expect(onSubmitMock).not.toHaveBeenCalled();
	});

	it("Should throw an error if the fields are filled different", () => {
		const newPassword = "123456";

		fireEvent.input(newPassInput, { target: { value: newPassword } });
		fireEvent.input(confirmNewPassInput, {
			target: { value: "654321" },
		});

		fireEvent.click(sendButton);

		expect(onSubmitMock).not.toHaveBeenCalled();
	});

	it("Should change the password only if the passwords are not empty and equal", () => {
		const newPassword = "123456";

		fireEvent.input(newPassInput, { target: { value: newPassword } });
		fireEvent.input(confirmNewPassInput, {
			target: { value: newPassword },
		});

		fireEvent.click(sendButton);

		expect(onSubmitMock).toHaveBeenCalledTimes(1);
		expect(onSubmitMock).toHaveBeenCalledWith(newPassword);
	});

	it("Should not show the password by default", () => {
		expect(newPassInput).toHaveAttribute("type", "password");
		expect(confirmNewPassInput).toHaveAttribute("type", "password");
	});

	it("Should allow the user to see the passwords", () => {
		expect(showPass).toBeInTheDocument();

		fireEvent.click(showPass);

		expect(newPassInput).toHaveAttribute("type", "text");
		expect(confirmNewPassInput).toHaveAttribute("type", "text");
	});
});
