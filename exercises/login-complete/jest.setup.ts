import "@testing-library/jest-dom";

beforeEach(() => {
	jest.spyOn(console, "error").mockImplementation(jest.fn());
});
