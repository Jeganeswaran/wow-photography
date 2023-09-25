import React from 'react'

const LoadingBtn = ({ title = "Submit", fetching = false, disabled = false, ...restProps }) => {
    return (
        <button
            disabled={disabled || fetching || false }
            {...restProps}
        >
            {fetching ? `loading...` : title}
        </button>
    )
}

export default LoadingBtn
