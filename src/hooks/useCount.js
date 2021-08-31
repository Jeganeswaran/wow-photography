import { useState } from "react"

const useCount = (init = 0) => {
    //state count
    const [count, setCount] = useState(init);

    return {
        count,
        setCount,
        inc() {
            setCount(count + 1)
        },
        decr() {
            setCount(count - 1)
        },
        add(c) {
            setCount(count + c)
        },
        sub(c) {
            setCount(count - c)
        },
    }
}

export default useCount