import React from 'react'

const Ip = ({dispatch, type="text", ...ipProps}) => {
    return (
        <input  
            type={type}
            onChange={(e) => {
                const {name, value} = e.target;
                dispatch({
                    type: "CHANGE",
                    name, 
                    value: type === "tel" ? 
                            value.replace(/[^0-9]/gi, '') :
                            value
                })
            }}
            {...ipProps}
        />
    )
}

export default Ip
