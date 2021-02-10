import { useForm } from 'react-hook-form';
import { Task } from '../../../types/task';
import { AppForm } from '../../form/app-form/AppForm';
import { validations } from '../../form/form.validations';
import { FormErrorMessage } from '../../form/error-message/FormErrorMessage';
import './AddTaskForm.scss';

interface Props {
    onSubmit: (task: Task) => Promise<void>;
}

interface FormData {
    id: string;
    text: string;
}

export const AddTaskForm = (props: Props) => {
    const { handleSubmit, register, errors, reset } = useForm();

    const onSubmit = async (data: FormData) => {
        await props.onSubmit({
            id: Number(data.id),
            text: data.text
        });
        reset();
    }

    return (
        <div className="add-task-form-container">
            <AppForm title="Add Task Form">
                <div className="form-row">
                    <label>Task ID</label>
                    <input title="add-task-id" type="text" name="id"
                        ref={register({ required: validations.required })} />
                    <FormErrorMessage message={errors?.id?.message} />
                </div>
                <div className="form-row">
                    <label>Description</label>
                    <input title="add-task-text" type="text" name="text"
                        ref={register({ required: validations.required })} />
                    <FormErrorMessage message={errors?.text?.message} />
                </div>
                <div className="form-row submit-row">
                    <input title="add-submit" type="submit" value="Add"
                        onClick={handleSubmit(onSubmit)} />
                </div>
            </AppForm>
        </div>
    );
}