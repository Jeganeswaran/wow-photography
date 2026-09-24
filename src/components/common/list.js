import React from 'react'

const List = ({RenderItem, list = [], title="", ...restProps}) => list.map((listitem, index) => 
    <RenderItem 
        key={`${title}-${listitem.id || index}`}
        {...listitem}
        {...restProps}
    />
)

export default List
