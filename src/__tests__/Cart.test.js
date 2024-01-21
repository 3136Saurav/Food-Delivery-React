import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCK_DATA from "./mocks/RestaurantItemListMock.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load Restaurant Menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Whopper (2)");
  fireEvent.click(accordionHeader);

  const itemList = screen.getAllByTestId("itemList");
  expect(itemList.length).toBe(2);

  const zeroItemHeader = screen.getByText("Cart (0)");
  expect(zeroItemHeader).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);

  const oneItemAddedToCartHeader = screen.getByText("Cart (1)");
  expect(oneItemAddedToCartHeader).toBeInTheDocument();

  const itemListCount = screen.getAllByTestId("itemList").length;
  expect(itemListCount).toBe(3);

  // Click clear cart
  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);

  const itemListCountAfterClearCart = screen.getAllByTestId("itemList").length;
  expect(itemList.length).toBe(2);
});
