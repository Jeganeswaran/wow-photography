import React, { Fragment } from 'react'
import List from './list';
import Loader from './loader';

const DynamicList = ({ RenderItem, title , list = [], fetching, ...restProps }) => {
    return (
        <Fragment>
            {
                Array.isArray(list) && list.length > 0 &&
                <List
                    RenderItem={RenderItem}
                    title={title}
                    list={list}
                    {...restProps}
                />
            }
            {
                fetching &&
                <div className="w-100 pt-3 pb-3 flex-grow-1 flex-center">
                    <Loader width="30px" height="30px" />
                </div>
            }
        </Fragment>
    )
}

export default DynamicList
