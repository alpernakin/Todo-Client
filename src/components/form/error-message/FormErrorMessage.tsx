import './FormErrorMessage.scss';

interface Props {
    message: string;
}

export const FormErrorMessage = (props: Props) => (
    <>
        {props.message && <span className="form-error-message">{props.message}</span>}
    </>
);