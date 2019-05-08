import { useLayoutEffect } from 'react'

//scroll to top layout effect
const useScrollToTop = (deps = []) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, deps)
}

export default useScrollToTop