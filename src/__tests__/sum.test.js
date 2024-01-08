import sum from "../components/sum";

test("Sum function should calculate the sum of 2 numbers", () => {
  const result = sum(2, 7);

  // Assertion
  expect(result).toBe(9);
});
