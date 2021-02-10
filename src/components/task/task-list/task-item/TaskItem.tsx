import { Task } from '../../../../types/task';
import './TaskItem.scss';

interface Props {
    task: Task;
    onClicked?: (task: Task) => void;
}

export const TaskItem = (props: Props) => (
    <div className="task-item">
        <div title="task-item-content" className="task-item-content" onClick={() => {
            if (typeof props.onClicked === 'function')
                props.onClicked(props.task)
        }}>
            {props.task.id}. {props.task.text}
        </div>
    </div>
);