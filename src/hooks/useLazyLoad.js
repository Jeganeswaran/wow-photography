import { useState, useEffect } from "react";

export default function useLazyLoad(ref) {
    // State and setter for storing whether element is visible
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Update our state when observer callback fires
            if (entry.isIntersecting) {
                setLoaded(true);
            }
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return loaded;
}