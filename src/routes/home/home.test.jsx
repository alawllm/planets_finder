import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Home from "./home.component";

describe("homepage", () => {
  test("renders correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const heading = screen.getByRole("heading", {
      name: "Your home solar system",
    });
    expect(heading).toBeInTheDocument();

    const solarSystemComponent = screen.getByTestId("solar-system-component");
    expect(solarSystemComponent).toBeInTheDocument();
  });
});
