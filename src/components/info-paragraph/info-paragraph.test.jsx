import { render, screen } from "@testing-library/react";
import { describe, expect,test } from "vitest";

import InfoParagraph from "./info-paragraph.component";

describe('InfoParagraph', () => {
    test('renders correctly', () => {
        render(<InfoParagraph label={'label'} content={'content'}/>)
        const label = screen.getByText('label')
        const content = screen.getByText('content')
        expect(label).toBeInTheDocument();
        expect(content).toBeInTheDocument();
    })
})