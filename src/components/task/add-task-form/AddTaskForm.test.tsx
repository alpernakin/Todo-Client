import { fireEvent, render, screen } from "@testing-library/react";
import { Task } from "../../../types/task";
import { AddTaskForm } from "./AddTaskForm";
import { act } from "react-dom/test-utils";

describe('add task form component', () => {
    it('should return the form values', async () => {
        const handleTaskAdd = async (data: Task) => {
            expect(data).toEqual({
                id: 1,
                text: 'text'
            });
        }

        render(<AddTaskForm onSubmit={handleTaskAdd} />);
        fireEvent.change(screen.getByTitle(/add-task-id/i), { target: { value: 1 } });
        fireEvent.change(screen.getByTitle(/add-task-text/i), { target: { value: 'text' } });

        await act(async () => {
            fireEvent.click(screen.getByTitle(/add-submit/i));
        });
    });
});