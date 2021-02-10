import { fireEvent, render, screen } from "@testing-library/react";
import { Task } from "../../../types/task";
import { TaskList } from "./TaskList";

describe('task list component', () => {

    const dummyTasks = [
        { id: 1, text: 'text' },
        { id: 2, text: 'text 2' }
    ];

    it('should list the given tasks', () => {
        render(<TaskList tasks={dummyTasks} />);
        const itemContents = screen.getAllByTitle(/task-item-content/i);
        expect(itemContents.length).toBe(2);
    });

    it('should return the clicked task', () => {
        const onClick = (task: Task) => {
            expect(task).toEqual({
                id: 1,
                text: 'text'
            });
        }

        render(<TaskList tasks={dummyTasks} onTaskItemSelected={onClick} />);
        fireEvent.click(screen.getAllByTitle(/task-item-content/i)[0]);
    });
})