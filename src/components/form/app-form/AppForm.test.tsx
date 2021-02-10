import { render, screen } from "@testing-library/react";
import { AppForm } from "./AppForm";

describe('app form component', () => {
    it('should create title', () => {
        render(
            <AppForm title="test title">
                <div>Dummy Content</div>
            </AppForm>
        );

        expect(screen.getByTitle(/app-form-title/i).innerHTML).toBe('test title');
    });
});