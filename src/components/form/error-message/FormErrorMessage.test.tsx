import { render } from "@testing-library/react";
import { scryRenderedDOMComponentsWithTag } from "react-dom/test-utils";
import { FormErrorMessage } from "./FormErrorMessage";

describe('form error message component', () => {
    it ('should show the message', () => {
        const component = render(<FormErrorMessage message="test message" />);
        const messageEl = component.container.getElementsByClassName('form-error-message')[0];
        expect(messageEl.innerHTML).toBe('test message');
    });

    it ('should not display where there is no message', () => {
        const component = render(<FormErrorMessage message="" />);
        const messageElements = component.container.getElementsByClassName('form-error-message');
        expect(messageElements.length).toBe(0);
    });
});