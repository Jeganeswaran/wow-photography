import { useState, useEffect } from "react";

export default function useAnimate(duration) {

    const [anim, setAnim] = useState(0);

    useEffect(() => {
        let start = performance.now();
        let rfId = null;

        const step = (time) => {
            // timeFraction goes from 0 to 1
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;

            setAnim(timeFraction);

            if (timeFraction < 1) {
                rfId = requestAnimationFrame(step);
            }
        }

        if (start) {
            rfId = requestAnimationFrame(step);
        }

        return () => {
            rfId && cancelAnimationFrame(rfId);
        }

    }, [])

    return anim;

}