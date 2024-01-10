import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, { withHigherRating } from "../components/RestaurantCard";
import MOCK_DATA from "./mocks/RestaurantCardMock.json";

it("Should render the Restaurant Card component with props data", () => {
  render(<RestaurantCard restaurant={MOCK_DATA} />);

  const name = screen.getByText("Domino's Pizza");

  expect(name).toBeInTheDocument();
});
