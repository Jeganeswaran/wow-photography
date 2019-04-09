import { useEffect } from "react"

const modalRoot = document.getElementById("modal-root");

const usePortal = (children) => {

    const el = document.createElement('div');

    useEffect(() => {
        modalRoot.appendChild(el);
        return () => {
            modalRoot.removeChild(el);
        };
    }, [children])

    return el;
}

export default usePortal
