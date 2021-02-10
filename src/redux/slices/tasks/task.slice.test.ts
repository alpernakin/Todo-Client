import { taskActions } from './task.slice';

describe('redux task slice', () => {

    const dummyTasks = [{ id: 1, text: 'test' }];

    it('should create add action', () => {    
        const action = taskActions.add(dummyTasks);
        expect(action.type).toBe('tasks/add');
        expect(action.payload).toEqual(dummyTasks);
    });

    it('should create update action', () => {
        const action = taskActions.update(dummyTasks[0]);
        expect(action.type).toBe('tasks/update');
        expect(action.payload).toEqual(dummyTasks[0]);
    });

    it('should create remove action', () => {
        const action = taskActions.remove(0);
        expect(action.type).toBe('tasks/remove');
        expect(action.payload).toEqual(0);
    });
});