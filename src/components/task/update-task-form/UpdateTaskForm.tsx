import './UpdateTaskForm.scss';
import { Task } from '../../../types/task';
import { useForm } from 'react-hook-form';
import { AppForm } from '../../form/app-form/AppForm';
import { FormErrorMessage } from '../../form/error-message/FormErrorMessage';

interface Props {
    selectedTask?: Task;
    onUpdate: (task: Task) => void;
    onRemove: (id: number) => void;
}

interface FormData {
    id: string;
    text: string;
}

export const UpdateTaskForm = (props: Props) => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (data: FormData) => {
        props.onUpdate({
            id: props.selectedTask?.id || -1,
            text: data.text
        });
    }

    const onRemove = () => {
        if (props.selectedTask) {
            props.onRemove(props.selectedTask.id);
        }
    }

    return (
        <>
            {
                typeof props.selectedTask !== 'undefined' &&
                <div className="update-task-form-container">
                    <AppForm title="Update Task Form">
                        <div className="form-row">
                            <label>Task ID</label>
                            <input title="update-task-id" type="text" name="id"
                                defaultValue={props.selectedTask?.id}
                                ref={register({ required: true })}
                                disabled />
                        </div>
                        <div className="form-row">
                            <label>Description</label>
                            <input title="update-task-text" type="text" name="text"
                                defaultValue={props.selectedTask?.text}
                                ref={register({ required: true })} />
                            <FormErrorMessage message={errors?.text?.message} />
                        </div>
                        <div className="form-row submit-row">
                            <input title="update-submit" type="submit" value="Update"
                                onClick={handleSubmit(onSubmit)} />

                            <input title="update-remove" type="submit" className="remove-btn" value="Remove"
                                onClick={handleSubmit(onRemove)} />
                        </div>
                    </AppForm>

                </div>
            }
        </>
    );
}