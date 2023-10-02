import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { describe, expect, test, vitest } from "vitest";

import PlanetDesktop from "./planet-desktop.component";

describe("Planet Desktop", () => {
  test("renders with correct class name", () => {
    const name = "saturn";
    const { container } = render(<PlanetDesktop name={name} />);
    //finds correct class name
    const elementClass = container.firstChild.classList.contains(
      `${name}-outline`
    );
    expect(elementClass).toBe(true);
  });

  test("handles onClick event", async () => {
    user.setup();
    const name = "saturn";
    const onClick = vitest.fn();
    render(<PlanetDesktop name={name} onClick={onClick} />);
    const planetChild = screen.getByTestId(`planet-desktop-${name}`);
    await user.click(planetChild);
    expect(onClick).toHaveBeenCalled();
  });

  test("handles onMouseEnter and onMouseLeave events", async () => {
    user.setup();
    const name = "saturn";
    const onMouseEnter = vitest.fn();
    const onMouseLeave = vitest.fn();
    render(
      <PlanetDesktop
        name={name}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
    const planetChild = screen.getByTestId(`planet-desktop-${name}`);
    await user.hover(planetChild);
    expect(onMouseEnter).toHaveBeenCalledOnce();
    await user.unhover(planetChild);
    expect(onMouseLeave).toHaveBeenCalledOnce();
  });
});
