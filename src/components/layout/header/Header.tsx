import { connect } from 'react-redux';
import { State } from '../../../redux/store';
import './Header.scss';
import { Notification } from './notification/Notification';

interface Props {
    taskCount?: number;
}

const Header = (props: Props) => {
    return (
        <header className="app-header-container">
            <Notification
                title="Tasks"
                navigate="/task-manager"
                badge={props.taskCount?.toString() || ""} />
        </header>
    );
}

const mapStateToProps = (state: State) => ({
    taskCount: state.tasks.length
});

export default connect(mapStateToProps)(Header);