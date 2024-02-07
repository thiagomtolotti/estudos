import {
	RenderResult,
	fireEvent,
	render,
	screen,
} from "@testing-library/react";
import { ForgotPasswordPage } from "./ForgotPasswordPage";

describe("ForgotPasswordForm", () => {
	let emailInput: HTMLInputElement, sendButton: HTMLButtonElement;
	let container: RenderResult;

	beforeEach(() => {
		container = render(<ForgotPasswordPage />);

		emailInput = screen.getByPlaceholderText("email");
		sendButton = screen.getByRole("button");
	});

	it("Should render correctly", () => {
		expect(container.container).toMatchSnapshot();
	});

	it("Should change the stage when the email is sent", () => {
		const emailSent = "teste@teste.com";

		fireEvent.input(emailInput, { target: { value: emailSent } });
		fireEvent.click(sendButton);

		expect(emailInput).not.toBeInTheDocument();

		const confirmText = screen.getByTestId("confirm-email-sent");

		expect(confirmText).toBeInTheDocument();
		expect(confirmText).toHaveTextContent(emailSent);
	});
});
