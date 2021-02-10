import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { taskApi } from '../../api/tasks.api';
import { Task } from '../../types/task';
import { taskActions } from '../../redux/slices/tasks/task.slice';
import './TaskManager.scss';
import { TaskList } from '../../components/task/task-list/TaskList';
import { State } from '../../redux/store';
import { AddTaskForm } from '../../components/task/add-task-form/AddTaskForm';
import { UpdateTaskForm } from '../../components/task/update-task-form/UpdateTaskForm';

interface Props {
    tasks: Task[];
    addTasks: (data: Task[]) => void;
    update: (task: Task) => void;
    remove: (id: number) => void;
}

export const TaskManager = (props: Props): JSX.Element => {
    useEffect(() => {
        if (!props.tasks || !props.tasks.length) {
            taskApi.fetch().then(data =>
                props.addTasks(data));
        }
    }, []);
    const [selectedTask, setSelectedTask] = useState<Task>();

    const handleTaskItemSelect = (task: Task) => {
        setSelectedTask(task);
    }

    const handleTaskAdd = async (task: Task) => {
        try {
            await taskApi.create(task);
            props.addTasks([task]);
        } catch (err) {
            alert("The task couldn't be added.");
        }
    }

    const handleTaskUpdate = async (task: Task) => {
        try {
            await taskApi.update(task.id, task);
            props.update(task);
        } catch (err) {
            alert("The task couldn't be updated.");
        }
    }

    const handleTaskRemove = async (id: number) => {
        try {
            await taskApi.remove(id);
            props.remove(id);
            setSelectedTask(undefined);
        } catch (err) {
            alert("The task couldn't be removed.");
        }
    }

    return (
        <div className="task-manager-page">
            <AddTaskForm onSubmit={handleTaskAdd} />

            <TaskList
                tasks={props.tasks}
                onTaskItemSelected={handleTaskItemSelect} />

            <UpdateTaskForm
                selectedTask={selectedTask}
                onUpdate={handleTaskUpdate}
                onRemove={handleTaskRemove} />
        </div>
    );
}

const mapDispatchToProps = {
    addTasks: taskActions.add,
    update: taskActions.update,
    remove: taskActions.remove
}

const mapStateToProps = (state: State) => ({
    tasks: state.tasks
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);