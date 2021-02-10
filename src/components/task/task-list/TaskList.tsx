import { Task } from "../../../types/task";
import { TaskItem } from "./task-item/TaskItem";
import './TaskList.scss';

interface Props {
    tasks: Task[];
    onTaskItemSelected?: (task: Task) => void;
}

export const TaskList = (props: Props) => {
    const handleTaskItemClick = (task: Task) => {
        if (typeof props.onTaskItemSelected === 'function')
            props.onTaskItemSelected(task);
    }
    return (
        <div className="task-list-container">
            <div className="list-title">
                <h3 title="list-title">Task List</h3>
            </div>
            <div className="list-items">
                {props.tasks &&
                    props.tasks.map(task =>
                        <TaskItem key={task.id} task={task} onClicked={handleTaskItemClick} />)}
            </div>
        </div>
    );
}