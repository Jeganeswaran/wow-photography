import React from 'react'

const LoadingBtn = ({ title = "Submit", fetching = false, ...restProps }) => {
    return (
        <button
            disabled={fetching}
            {...restProps}
        >
            {fetching ? `loading...` : title}
        </button>
    )
}

export default LoadingBtn
