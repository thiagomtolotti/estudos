import {
	RenderResult,
	fireEvent,
	render,
	screen,
} from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import React from "react";

describe("Login Page", () => {
	let container: RenderResult;
	let forgotPasswordButton: HTMLElement;

	beforeEach(() => {
		container = render(<LoginPage />);

		forgotPasswordButton = screen.getByTestId("forgot-password");

		console.log(container.container.innerHTML);
	});

	it("Should render correctly", () => {
		expect(container.container).toMatchSnapshot();
	});

	it("Should redirect to /forgotPassword when the appropriate button is clicked", async () => {
		expect(forgotPasswordButton).toHaveAttribute("href", "/forgotPassword");
	});
});
