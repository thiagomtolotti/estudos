import { render, RenderResult } from "@testing-library/react";
import ChangePasswordPage from "./page";

describe("Change Password page", () => {
	let page: RenderResult;

	beforeEach(() => {
		page = render(<ChangePasswordPage />);
	});

	it("Should render correctly", () => {
		expect(page.container).toMatchSnapshot();
	});
});
