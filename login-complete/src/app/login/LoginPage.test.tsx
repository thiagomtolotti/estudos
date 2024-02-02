import { RenderResult, render } from "@testing-library/react";
import Login from "./page";

describe("Login Page", () => {
	let container: RenderResult;
	beforeEach(() => {
		container = render(<Login />);
	});

	it("Should render correctly", () => {
		expect(container.container).toMatchSnapshot();
	});
});
