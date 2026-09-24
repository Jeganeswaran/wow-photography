import { useState } from 'react'

const useToggle = (init = false) => {
    
    const [toggle, setToggle] = useState(false)

    return {
        toggle,
        setToggle,
        tog() {
            setToggle(x => !x)
        }
    }

}

export default useToggle