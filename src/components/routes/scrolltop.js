import {Component} from "react"
import {withRouter} from "react-router-dom"
import { connect } from 'react-redux'
import { closeModal } from "../../redux/actions/common";

class ScrollToTopComp extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            if(this.props.open){
                this.props.closeModal();
            }
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

const ScrollToTop = withRouter(connect((state) => state.modalReducer, {closeModal} )(ScrollToTopComp));

export default ScrollToTop