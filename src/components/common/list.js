import React from 'react'

const List = ({RenderItem, list = [], title="", ...restProps}) => list.map((listitem, index) => 
    <RenderItem 
        key={`${title}-${listitem.id || index}`}
        listIndex={index + 1}
        {...listitem}
        {...restProps}
    />
)

export default List
