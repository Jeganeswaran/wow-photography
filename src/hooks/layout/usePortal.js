import { useEffect } from "react"

const usePortal = (modalRoot, el, type = 'div', deps = []) => {

    useEffect(() => {
        modalRoot.appendChild(el);
        return () => {
            modalRoot.removeChild(el);
        };
    }, deps)

}

export default usePortal
