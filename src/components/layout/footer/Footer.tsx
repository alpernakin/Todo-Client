import { connect } from 'react-redux';
import { State } from '../../../redux/store';
import './Footer.scss';

const Footer = (props: any) => {

    return (
        <footer>

        </footer>
    );
}

const mapStateToProps = (state: State) => ({
    taskCount: state.tasks.length
})

export default connect(mapStateToProps)(Footer);