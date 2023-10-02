import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { rest } from "msw";
import { describe, expect, test } from "vitest";

import { server } from "../../mocks/server";

import OwnPlanet from "./own-planet.component";

describe("own planet", () => {
  test("renders correctly", () => {
    render(
      <MemoryRouter>
        <OwnPlanet />
      </MemoryRouter>
    );
    const buttonLucky = screen.getByRole("button", { name: "feeling lucky?" });
    expect(buttonLucky).toBeInTheDocument();

    const textPlanet = screen.getByText("type in planet name");
    expect(textPlanet).toBeInTheDocument();

    const buttonSearch = screen.getByRole("button", { name: "Search" });
    expect(buttonSearch).toBeInTheDocument();

    const inputPlanet = screen.getByTestId("input-planet");
    expect(inputPlanet).toBeInTheDocument();

    const formPlanet = screen.getByTestId("form-planet");
    expect(formPlanet).toBeInTheDocument();
  });

  test("handles input change", async () => {
    user.setup();
    render(
      <MemoryRouter>
        <OwnPlanet />
      </MemoryRouter>
    );
    const inputPlanet = screen.getByTestId("input-planet");
    await user.type(inputPlanet, "mars");
    expect(inputPlanet.value).toBe("mars");
  });

  test("submits form and makes API call", async () => {
    user.setup();
    render(
      <MemoryRouter>
        <OwnPlanet />
      </MemoryRouter>
    );
    const inputPlanet = screen.getByTestId("input-planet");
    await user.type(inputPlanet, "saturn");
    const buttonSearch = screen.getByRole("button", { name: "Search" });
    await user.click(buttonSearch);
    await waitFor(() => {
      screen.queryByLabelText("Loading...");
    });
    //add form submitted?
  });

  test("focus works", async () => {
    user.setup();
    render(
      <MemoryRouter>
        <OwnPlanet />
      </MemoryRouter>
    );
    const buttonLucky = screen.getByRole("button", { name: "feeling lucky?" });
    const inputPlanet = screen.getByTestId("input-planet");
    await user.tab();
    expect(buttonLucky).toHaveFocus();
    await user.tab();
    expect(inputPlanet).toHaveFocus();
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
        <OwnPlanet />
      </MemoryRouter>
    );

    const inputPlanet = screen.getByTestId("input-planet");
    await user.type(inputPlanet, "saturn");
    const buttonSearch = screen.getByRole("button", { name: "Search" });
    await user.click(buttonSearch);

    const apiErrorText = await screen.findByText(
      "sorry, the API is unreachable."
    );
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
        <OwnPlanet />
      </MemoryRouter>
    );

    const inputPlanet = screen.getByTestId("input-planet");
    await user.type(inputPlanet, "saturn");
    const buttonSearch = screen.getByRole("button", { name: "Search" });
    await user.click(buttonSearch);

    const apiErrorText = await screen.findByText("sorry, an error occured.");
    expect(apiErrorText).toBeInTheDocument();
  });
});
