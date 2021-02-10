import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { taskApi } from "../../api/tasks.api";
import store from "../../redux/store";
import { Task } from "../../types/task";
import ConnectedTaskManager, { TaskManager } from "./TaskManager";

describe('task manager page component', () => {
    const createWithStore = () => {
        return (
            <Provider store={store}>
                <ConnectedTaskManager />
            </Provider>
        );
    };

    const dummyTasks = [
        { id: 1, text: 'text' },
        { id: 2, text: 'text 2' }
    ];

    taskApi.fetch = () => Promise.resolve(dummyTasks);
    taskApi.update = async () => Promise.resolve();
    taskApi.remove = async () => Promise.resolve();
    taskApi.create = async () => Promise.resolve();

    it('should load task data in the beginning', () => {
        let addTasks = (tasks: Task[]) => {
            expect(tasks).toEqual(dummyTasks);
        }

        render(<TaskManager
            tasks={[]}
            addTasks={addTasks}
            update={_ => { }}
            remove={_ => { }} />);
    });

    it('should dispatch add function', async () => {
        render(createWithStore());

        fireEvent.change(screen.getByTitle(/add-task-id/i), { target: { value: 5 } });
        fireEvent.change(screen.getByTitle(/add-task-text/i), { target: { value: 'text' } });

        await act(async () => {
            fireEvent.click(screen.getByTitle(/add-submit/i));
        });

        expect(store.getState().tasks[2]).toEqual({ id: 5, text: 'text' });
    });

    it('should dispatch update function', async () => {
        render(createWithStore());

        fireEvent.click(screen.getAllByTitle(/task-item-content/i)[0]);
        fireEvent.change(screen.getByTitle(/update-task-text/i), { target: { value: 'text 3' } });

        await act(async () => {
            fireEvent.click(screen.getByTitle(/update-submit/i));
        });

        expect(store.getState().tasks[0]).toEqual({ id: 1, text: 'text 3' });
    });

    it('should dispatch remove function', async () => {
        render(createWithStore());

        fireEvent.click(screen.getAllByTitle(/task-item-content/i)[0]);

        await act(async () => {
            fireEvent.click(screen.getByTitle(/update-remove/i));
        });

        const taskState = store.getState().tasks as Task[];
        expect(taskState.findIndex(x => x.id === 1)).toBe(-1)
    });
});