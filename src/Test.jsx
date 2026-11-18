import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders the App component without crashing", () => {
  render(<App />);

  const heading = screen.getByRole("heading", {
    level: 1,
    name: /Welcome to ali hassan/i,
  });

  expect(heading).toBeInTheDocument();
});
