import { render, screen } from "@testing-library/react";
import { describe, expect,test } from "vitest";

import IconLink from "./icon-link.component";

describe("Icon Link", () => {
  test("renders correctly", () => {
    const link = "https://example.com";
    const imageSrc = "icon.png";
    const description = "Icon Description";
    const size = 24;
    const opacity = 0.8;

    render(
      <IconLink
        link={link}
        imageSrc={imageSrc}
        description={description}
        size={size}
        opacity={opacity}
      />
    );
    const icon = screen.getByAltText(description);
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", imageSrc);
    expect(icon).toHaveStyle({
      height: `${size}px`,
      width: `${size}px`,
      opacity: `${opacity}`,
    });
  });
});
