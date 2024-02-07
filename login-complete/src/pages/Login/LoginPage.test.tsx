import { RenderResult, render, screen } from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import React, { ReactElement } from "react";

jest.mock(
	"next/link",
	() =>
		({ children, ...rest }: { children: ReactElement }) =>
			React.cloneElement(children, { ...rest })
);

describe("Login Page", () => {
	let container: RenderResult;
	let forgotPasswordButton: HTMLButtonElement;

	beforeEach(() => {
		container = render(<LoginPage />);

		forgotPasswordButton = screen.getByTestId("forgot-password");
	});

	it("Should render correctly", () => {
		expect(container.container).toMatchSnapshot();
	});

	it("Should redirect to /forgotPassword when the appropriate button is clicked", () => {
		expect(forgotPasswordButton).toHaveAttribute(
			"href",
			"/login/forgotPassword"
		);
	});
});