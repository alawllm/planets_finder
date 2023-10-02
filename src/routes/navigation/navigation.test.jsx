import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Navigation from "./navigation.component";

describe("Navigation", () => {
  test("renders correctly", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const homeLink = screen.getByRole("link", {
      name: /your home/i,
    });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    const ownPlanetLink = screen.getByRole("link", {
      name: /find a planet/i,
    });
    expect(ownPlanetLink).toBeInTheDocument();
    expect(ownPlanetLink).toHaveAttribute("href", "/own-planet");
  });
});
