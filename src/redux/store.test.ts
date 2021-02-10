import { taskActions } from './slices/tasks/task.slice';
import store from './store';

describe('redux store', () => {

    const dummyTasks = [{ id: 1, text: 'test' }];

    it('should add new tasks', () => {
        store.dispatch(taskActions.add(dummyTasks));
        expect(store.getState().tasks).toEqual(dummyTasks);
    });

    it('should update tasks', () => {
        const newTask = { id: 1, text: 'new text' };
        store.dispatch(taskActions.update(newTask));
        expect(store.getState().tasks).toEqual([newTask]);
    });

    it('should remove task', () => {
        store.dispatch(taskActions.remove(1));
        expect(store.getState().tasks).toEqual([]);
    });
});