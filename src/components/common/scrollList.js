import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import DynamicList from './dynamiclist';
import LoadMore from './loadmore';
import { loadMore } from '../../redux/actions/http';

const ScrollList = ({
    RenderItem,
    type,
    objName,
    listData,
    loadMore,
    NoData,
    rest = {},
    ...restProps
}) => {
    if (listData) {
        if(listData.count === 0){
            return <NoData />
        }
        return (
            <Fragment>
                <DynamicList
                    RenderItem={RenderItem}
                    title={type}
                    list={listData.data}
                    fetching={listData.fetching}
                    {...restProps}
                />
                {
                    listData.next && !listData.fetching && !listData.error &&
                    <LoadMore
                        listmore={() => {
                            loadMore(type, 
                                {
                                    url: listData.next
                                }, 
                                objName,
                                rest
                            )
                        }}
                    />
                }
            </Fragment>
        )
    }
    return null
}

export default connect(null, { loadMore })(ScrollList)