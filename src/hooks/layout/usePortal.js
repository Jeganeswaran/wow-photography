import { useEffect } from "react"

const usePortal = (modalRoot, el) => {

    useEffect(() => {
        modalRoot.appendChild(el);
        return () => {
            modalRoot.removeChild(el);
        };
    }, [])

}

export default usePortal
