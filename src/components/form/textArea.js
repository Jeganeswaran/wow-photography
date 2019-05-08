import React from 'react'

const TextArea = ({ dispatch, ...ipProps }) => {
    return (
        <textarea
            onChange={(e) => {
                const { name, value } = e.target;
                dispatch({
                    type: "CHANGE",
                    name,
                    value: value
                })
            }}
            {...ipProps}
        />
    )
}

export default TextArea
