import { RenderResult, render } from "@testing-library/react";
import ChangePasswordConfirm from ".";

describe("Change Password Confirm", () => {
	let renderResult: RenderResult;

	beforeEach(() => {
		renderResult = render(<ChangePasswordConfirm />);
	});

	it("Should render correctly", () => {
		expect(renderResult.container).toMatchSnapshot();
	});
});
