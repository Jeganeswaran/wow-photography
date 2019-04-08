import ReactDOM from 'react-dom';
import usePortal from "../../hooks/layout/usePortal"

const modalRoot = document.getElementById("modal-root");

const Portal = ({ children, type = "div" }) => {

    const el = document.createElement(type);

    usePortal(modalRoot, el);

    // Use a portal to render the children into the element
    return ReactDOM.createPortal(
        // Any valid React child: JSX, strings, arrays, etc.
        children,
        // A DOM element
        el,
    );
}

export default Portal