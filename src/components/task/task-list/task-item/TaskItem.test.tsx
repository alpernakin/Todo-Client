import { fireEvent, render, screen } from "@testing-library/react";
import { Task } from "../../../../types/task";
import { TaskItem } from "./TaskItem";

describe('task item component', () => {
    it('should execute the click callback', () => {
        const onClick = (task: Task) => {
            expect(task).toEqual({
                id: 1,
                text: 'text'
            });
        }
        render(<TaskItem task={{ id: 1, text: 'text' }} onClicked={onClick} />);
        fireEvent.click(screen.getByTitle(/task-item-content/i));
    });
})