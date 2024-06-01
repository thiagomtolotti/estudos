import { RenderResult, render, screen } from "@testing-library/react";
import ChangePasswordConfirm from ".";

describe("Change Password Confirm", () => {
	let backToLoginButton: HTMLButtonElement;
	let renderResult: RenderResult;

	beforeEach(() => {
		renderResult = render(<ChangePasswordConfirm />);
		backToLoginButton = screen.getByTestId("login-button");
	});

	it("Should render correctly", () => {
		expect(renderResult.container).toMatchSnapshot();
	});

	it("Should have a button that redirects to the login page", () => {
		expect(backToLoginButton).toHaveAttribute("href", "/login");
	});
});
