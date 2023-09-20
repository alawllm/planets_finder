import { render, screen } from "@testing-library/react";
import InfoParagraph from "./info-paragraph.component";
import { describe, test, expect } from "vitest";

describe('InfoParagraph', () => {
    test('renders correctly', () => {
        render(<InfoParagraph label={'label'} content={'content'}/>)
        const paragraph = screen.getByText('label')
        expect(paragraph).toBeInTheDocument();
    })
})