import React, {useEffect} from 'react'
import List from '../common/list';

const SelectIp = ({ dispatch, decendOp, decendIp, options, placeholder, value, ...ipProps }) => {

    useEffect(() => {
        if(decendOp && decendIp){
            const op = options.filter(x => x.id.toString() === value)[0];
            dispatch({
                type: "UPDATE_INPUT",
                name: decendIp,
                payload: {
                    options: op && op.length > 0 ? op[decendOp] : []
                }
            })
        }
    }, [value])

    return (
        <select
            value={value}
            onChange={(e) => {
                const { name, value } = e.target;
                dispatch({
                    type: "CHANGE",
                    name,
                    value: value
                })
            }}
            {...ipProps}
        >
            <List
                title={ipProps.name}
                list={[{ name: placeholder, id: "" }, ...options]}
                RenderItem={({ name, id }) => (
                    <option value={id}>{name}</option>
                )}
            />
        </select>
    )
}

export default SelectIp
