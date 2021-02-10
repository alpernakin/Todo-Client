import './Notification.scss';

interface Props {
    title: string;
    navigate?: string;
    badge: string;
}

export const Notification = (props: Props) => (
    <>
        {props.badge && <a href={props.navigate || '#'} className="notification">
            <span>{props.title}</span>
            <span className="badge">{props.badge}</span>
        </a>}
    </>
)