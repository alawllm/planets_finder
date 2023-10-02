import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { rest } from "msw";
import { describe, expect, test } from "vitest";

import { server } from "../../mocks/server";

import SolarSystem from "./solar-system.component";

const planetNames = [
  "sun",
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

describe("Solar System", () => {
  test("renders planets correctly on desktop", () => {
    let planetCount = 0;
    render(
      <MemoryRouter>
        <SolarSystem />
      </MemoryRouter>
    );
    planetNames.forEach((planet) => {
      const desktopPlanetElements = screen.getAllByTestId(
        `planet-desktop-${planet}`
      );
      expect(desktopPlanetElements).toHaveLength(1);
      planetCount++;
    });
    expect(planetCount).toBe(9);
  });

  test("renders planets correctly on mobile", () => {
    let planetCount = 0;
    render(
      <MemoryRouter>
        <SolarSystem />
      </MemoryRouter>
    );
    planetNames.forEach((planet) => {
      const mobilePlanetElements = screen.getAllByTestId(
        `planet-mobile-${planet}`
      );
      expect(mobilePlanetElements).toHaveLength(1);
      planetCount++;
    });
    expect(planetCount).toBe(9);
  });

  test("sets planet name on hover, deletes on unhover", async () => {
    user.setup();
    const name = "saturn";
    render(
      <MemoryRouter>
        <SolarSystem name={name} />
      </MemoryRouter>
    );
    const hoveredPlanet = screen.getByTestId(`planet-desktop-${name}`);
    await user.hover(hoveredPlanet);
    const planetLabel = screen.getByText("_saturn_");
    expect(planetLabel).toBeInTheDocument();
    await user.unhover(hoveredPlanet);
    expect(planetLabel).not.toBeInTheDocument();
  });

  test("renders error when API is unreachable", async () => {
    user.setup();
    server.use(
      rest.get(
        "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/6",
        (req, res, ctx) => {
          return res(ctx.status(502));
        }
      )
    );
    render(
      <MemoryRouter>
        <SolarSystem />
      </MemoryRouter>
    );

    const saturnPlanet = screen.getByTestId("planet-desktop-saturn");
    await user.click(saturnPlanet);
    const apiErrorText = screen.getByText("sorry, the API is unreachable.");
    expect(apiErrorText).toBeInTheDocument();
  });

  test("renders error in other cases", async () => {
    user.setup();
    server.use(
      rest.get(
        "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/6",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(
      <MemoryRouter>
        <SolarSystem />
      </MemoryRouter>
    );

    const saturnPlanet = screen.getByTestId("planet-desktop-saturn");
    await user.click(saturnPlanet);
    const otherErrorText = screen.getByText("sorry, an error occured.");
    expect(otherErrorText).toBeInTheDocument();
  });

  test("does not render an error when it's not needed", async () => {
    user.setup();
    server.use(
      rest.get(
        "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/6",
        (req, res, ctx) => {
          return res(ctx.status(200));
        }
      )
    );
    render(
      <MemoryRouter>
        <SolarSystem />
      </MemoryRouter>
    );

    const saturnPlanet = screen.getByTestId("planet-desktop-saturn");
    await user.click(saturnPlanet);
    const otherErrorText = screen.queryByText("sorry, an error occured.");
    expect(otherErrorText).not.toBeInTheDocument();
    const apiErrorText = screen.queryByText("sorry, the API is unreachable.");
    expect(apiErrorText).not.toBeInTheDocument();
  });
});
