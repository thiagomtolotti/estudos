import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from ".";

describe("LoginForm", () => {
	let emailInput: HTMLInputElement,
		passInput: HTMLInputElement,
		sendBtn: HTMLButtonElement,
		rememberMeCheckbox: HTMLInputElement;
	const mockSubmit = jest.fn();

	beforeEach(() => {
		render(<LoginForm onSubmit={mockSubmit} />);

		emailInput = screen.getByPlaceholderText("email");
		passInput = screen.getByPlaceholderText("senha");
		rememberMeCheckbox = screen.getByRole("checkbox");
		sendBtn = screen.getByText("Login");
	});

	it("Should have an email input, a password input and a send button", () => {
		expect(emailInput).toBeInTheDocument();
		expect(passInput).toBeInTheDocument();
		expect(sendBtn).toBeInTheDocument();
	});

	it("Should have a remember me checkbox", () => {
		expect(rememberMeCheckbox).toBeInTheDocument();
	});

	describe("onSubmit function", () => {
		const mockUserName = "test@test.com";
		const mockPassword = "pass-test";

		it("Should not be called if the inputs are empty", () => {
			fireEvent.click(sendBtn);

			expect(mockSubmit).not.toHaveBeenCalled();
		});

		it("Should not be called if the password is empty", () => {
			fireEvent.change(emailInput, { target: { value: mockUserName } });

			fireEvent.click(sendBtn);

			expect(mockSubmit).not.toHaveBeenCalled();
		});

		it("Should not be called if the username is empty", () => {
			fireEvent.change(passInput, { target: { value: mockPassword } });

			fireEvent.click(sendBtn);

			expect(mockSubmit).not.toHaveBeenCalled();
		});

		it("Should not be called if the 'user' input is not an email", () => {
			const mockUserName = "test";

			fireEvent.change(emailInput, { target: { value: mockUserName } });
			fireEvent.change(passInput, { target: { value: mockPassword } });

			fireEvent.click(sendBtn);

			expect(mockSubmit).not.toHaveBeenCalled();
		});

		it("Should be called if the inputs are filled correctly", () => {
			fireEvent.change(emailInput, { target: { value: mockUserName } });
			fireEvent.change(passInput, { target: { value: mockPassword } });

			fireEvent.click(sendBtn);

			expect(mockSubmit).toHaveBeenCalledWith(
				mockUserName,
				mockPassword,
				false
			);
		});

		it("Should pass the argument 'rememberMe' correctly", () => {
			fireEvent.change(emailInput, { target: { value: mockUserName } });
			fireEvent.change(passInput, { target: { value: mockPassword } });
			fireEvent.click(rememberMeCheckbox);

			fireEvent.click(sendBtn);

			expect(mockSubmit).toHaveBeenCalledWith(
				mockUserName,
				mockPassword,
				true
			);
		});
	});
});
