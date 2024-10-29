import { render, screen } from "@testing-library/react";
import App from "./App";

test("display", () => {
  render(<App />);
  const linkElement = screen.getByText(/Display/i);
  expect(linkElement).toBeInTheDocument();
});
