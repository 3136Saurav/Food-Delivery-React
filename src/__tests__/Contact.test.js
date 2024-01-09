import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

// it === test

describe("Should Test the Contact Page Component", () => {
  it("Should load the Contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load the submit button in the Contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load the input box in the Contact component", () => {
    render(<Contact />);

    const nameInputBox = screen.getByPlaceholderText("Enter Name");

    expect(nameInputBox).toBeInTheDocument();
  });

  test("Should load 2 input boxes in the Contact component", () => {
    render(<Contact />);

    const allInputBoxes = screen.getAllByRole("textbox");

    expect(allInputBoxes.length).toBe(2);
  });
});
