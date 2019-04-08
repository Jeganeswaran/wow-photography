import { withRouter } from "react-router-dom"
import useScrollToTop from "../../hooks/layout/scrolltotop";

const ScrollTop = ({ children, location }) => {

    //get path name and search to be used as deps
    const { pathname, search } = location;

    //scroll the page to top 
    //change in pathname, search -> scroll to top 
    useScrollToTop([pathname, search])

    return children

}

export default withRouter(ScrollTop)