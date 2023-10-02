import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { describe, expect, test, vitest } from "vitest";

import PlanetMobile from "./planet-mobile.component";

describe("Planet Mobile", () => {
  test("renders correctly", () => {
    const name = "saturn";
    render(<PlanetMobile name={name} />);
    //checking text
    const planetText = screen.getByText(name);
    expect(planetText).toBeInTheDocument();
    //checking div
    const planetContainer = screen.getByTestId(`planet-mobile-${name}`);
    expect(planetContainer).toBeInTheDocument();
  });

  test("handles onClick correctly", async () => {
    user.setup();
    const name = "saturn";
    const onClick = vitest.fn();
    render(<PlanetMobile name={name} onClick={onClick} />);
    const planetContainer = screen.getByTestId(`planet-mobile-${name}`);
    await user.click(planetContainer);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
