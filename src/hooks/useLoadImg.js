import { useState, useLayoutEffect } from "react"

const useLoadImg = (src) => {

    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        let img = new Image();
        img.src = src;
        img.onload = () => {
            setLoading(false);
        }

        return () => {
            img.onload = null;
        }

    }, [src])

    return loading;

}

export default useLoadImg