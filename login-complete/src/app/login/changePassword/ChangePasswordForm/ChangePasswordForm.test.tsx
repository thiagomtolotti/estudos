import { fireEvent, render, screen } from "@testing-library/react";
import ChangePasswordForm from ".";

describe("ChangePasswordForm", () => {
	let newPassInput: HTMLInputElement,
		confirmNewPassInput: HTMLInputElement,
		sendButton: HTMLButtonElement;
	const onSubmitMock = jest.fn();

	beforeEach(() => {
		render(<ChangePasswordForm onSubmit={onSubmitMock} />);

		newPassInput = screen.getByPlaceholderText("Nova senha");
		confirmNewPassInput = screen.getByPlaceholderText(
			"Confirme a nova senha"
		);
		sendButton = screen.getByRole("button");
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

	it("Should send the result only if the passwords are not empty and equal", () => {
		const newPassword = "123456";

		fireEvent.input(newPassInput, { target: { value: newPassword } });
		fireEvent.input(confirmNewPassInput, {
			target: { value: newPassword },
		});

		fireEvent.click(sendButton);

		expect(onSubmitMock).toHaveBeenCalledTimes(1);
		expect(onSubmitMock).toHaveBeenCalledWith(newPassword);
	});
});
