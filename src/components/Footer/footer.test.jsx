import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect,test } from "vitest";

import Footer from "./footer.component";

describe("Footer", () => {
  test("renders correctly with the link", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const footerText = screen.getByText("Developed in 2023 by Ala Willam");
    expect(footerText).toBeInTheDocument();

    const aboutLink = screen.getByRole("link", {
      name: /about me/i,
    });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/about");
  });
});
