import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.jsx";

describe("App", () => {
  it("heading screen par dikhti hai", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Counter App" }),
    ).toBeInTheDocument();
  });

  it("shuru mein count 0 hota hai", () => {
    render(<App />);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("Increase button dabane se count 1 ho jata hai", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Increase" }));

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  it("Reset button dabane se count wapas 0 ho jata hai", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Increase" }));
    await user.click(screen.getByRole("button", { name: "Increase" }));
    await user.click(screen.getByRole("button", { name: "Reset" }));

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });
});
