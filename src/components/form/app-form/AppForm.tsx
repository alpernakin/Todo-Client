import "./AppForm.scss";

interface Props {
    title?: string;
    children: any;
}

export const AppForm = (props: Props) => (
    <form className="app-form" >
        {props.title &&
            <div className="form-row form-title">
                <h3 title="app-form-title">{props.title}</h3>
            </div>
        }
        {props.children}
    </form>
)