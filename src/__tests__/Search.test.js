import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../components/Body";
import MOCK_DATA from "./mocks/MockRestaurantList.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should Search Restaurant List for Pizza", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");
  console.log("searchInput - ", searchInput);

  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("restaurantCard");

  expect(cards.length).toBe(2);
});

it("should filter Top Rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("restaurantCard");
  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedButton);

  const cards = screen.getAllByTestId("restaurantCard");

  expect(cards.length).toBe(2);
});
