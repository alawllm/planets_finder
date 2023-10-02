import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect,test } from "vitest";

import About from "./about-me.component";

describe("About me", () => {
  test("renders correctly", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const heading = screen.getByRole("heading", { name: "Hello there!" });
    expect(heading).toBeInTheDocument();

    const paragraphAbout = screen.getByText(
      /I am Ala. Frontend Developer, ex-architect./i
    );
    expect(paragraphAbout).toBeInTheDocument();

    const paragraphSkills = screen.getByText(
      /Stack: React | Typescript | JavaScript | CSS | TailwindCSS/i
    );
    expect(paragraphSkills).toBeInTheDocument();

    const paragraphFindMe = screen.getByText(/find me on:/i);
    expect(paragraphFindMe).toBeInTheDocument();

    const linkedinLink = screen.getByTestId("linkedin-link");
    expect(linkedinLink).toBeInTheDocument();

    const githubLink = screen.getByTestId("github-link");
    expect(githubLink).toBeInTheDocument();
  });
});
