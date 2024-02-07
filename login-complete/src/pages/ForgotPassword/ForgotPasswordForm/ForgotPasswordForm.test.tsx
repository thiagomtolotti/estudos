import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import ForgotPasswordForm from ".";

console.error = jest.fn();
const mockSubmit = jest.fn();

describe("ForgotPasswordForm", () => {
  let emailInput: HTMLInputElement, sendButton: HTMLButtonElement;
  let container: RenderResult;

  beforeEach(() => {
    container = render(<ForgotPasswordForm onSubmit={mockSubmit} />);

    emailInput = screen.getByPlaceholderText("email");
    sendButton = screen.getByRole("button");
  });

  it("Should render correctly", () => {
    expect(container.container).toMatchSnapshot();
  });

  it("Should have a email input and a button", () => {
    expect(emailInput).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });

  describe("the onSubmit function", () => {
    it("Should not be called if the email input is empty", () => {
      fireEvent.click(sendButton);

      expect(console.error).toHaveBeenCalledWith("Insira um endereço de email");
    });

    it("Shouldn't be called if the email is not filled correctly", () => {
      const testInput = "test";

      fireEvent.input(emailInput, { target: { value: testInput } });

      fireEvent.click(sendButton);

      expect(mockSubmit).not.toHaveBeenCalled();
    });

    it("Should be called if the email is filled correctly", () => {
      const testEmail = "test@test.com";

      fireEvent.input(emailInput, { target: { value: testEmail } });

      fireEvent.click(sendButton);

      expect(mockSubmit).toHaveBeenCalledWith(testEmail);
    });
  });
});
