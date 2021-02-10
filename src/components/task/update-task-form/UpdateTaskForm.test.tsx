import { fireEvent, render, screen } from "@testing-library/react";
import { Task } from "../../../types/task";
import { act } from "react-dom/test-utils";
import { UpdateTaskForm } from "./UpdateTaskForm";

describe('update task form component', () => {

    const dummyTask = { id: 1, text: 'text' };
    let handleUpdate = async (task: Task) => Promise.resolve();
    let handleRemove = async (id: number) => Promise.resolve();

    const renderUsual = () => {
        render(<UpdateTaskForm
            selectedTask={dummyTask}
            onUpdate={handleUpdate}
            onRemove={handleRemove} />);
    }

    it('should show the task', () => {
        renderUsual();
        expect((screen.getByTitle(/update-task-id/i) as any).value).toBe('1');
        expect((screen.getByTitle(/update-task-text/i) as any).value).toBe('text');
    });

    it('should not display if there is no task selected', () => {
        const component = render(<UpdateTaskForm
            onUpdate={handleUpdate}
            onRemove={handleRemove} />);

        const containerCollection = component.container
            .getElementsByClassName('update-task-form-container');
        expect(containerCollection.length).toBe(0);
    });

    it('should return the form values on update', async () => {
        handleUpdate = async (data: Task) => {
            expect(data).toEqual({
                id: 1,
                text: 'text'
            });
        }

        renderUsual();

        await act(async () => {
            fireEvent.click(screen.getByTitle(/update-submit/i));
        });
    });

    it('should return the id on remove', async () => {
        handleRemove = async (id: number) => {
            expect(id).toBe(1);
        }

        renderUsual();

        await act(async () => {
            fireEvent.click(screen.getByTitle(/update-remove/i));
        });
    });
});