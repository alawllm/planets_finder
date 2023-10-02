import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import InfoPage from "./info-page.component";

const mockPlanetData = {
  name: "Earth",
  description: "The third planet from the Sun.",
  basicDetails: {
    mass: "5.97 x 10^24 kg",
    volume: "1 trillion cubic kilometers",
  },
  source: "NASA",
  wikiLink: "https://en.wikipedia.org/wiki/Earth",
};

describe("Info page", () => {
  test("renders correctly", () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: "/info-page", state: mockPlanetData }]}>
        <InfoPage />
      </MemoryRouter>
    );

    const headerElement = screen.getByText(`here is ${mockPlanetData.name}`);
    expect(headerElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(mockPlanetData.description);
    expect(descriptionElement).toBeInTheDocument();

    const massElement = screen.getByText(
      `${mockPlanetData.name} weighs around`
    );
    expect(massElement).toBeInTheDocument();
    const volumeElement = screen.getByText(
      `${mockPlanetData.name}'s volume is around`
    );
    expect(volumeElement).toBeInTheDocument();

    const sourceLinkElement = screen.getByText(
      `source: ${mockPlanetData.source}`
    );
    expect(sourceLinkElement).toBeInTheDocument();

    const imageElement = screen.getByAltText(mockPlanetData.name);
    expect(imageElement).toBeInTheDocument();
  });
});
