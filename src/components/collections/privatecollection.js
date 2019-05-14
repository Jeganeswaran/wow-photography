import React from 'react'
import { connect } from 'react-redux'
import CollectionList from './collectionlist';
import Portal from '../common/portal';
import { OpenModalBtn } from '../modals/modalbtns';

const PrivateCollection = ({ ids }) => {
    return (
        <div className="pt-3">
            <div className="row pb-3">
                <CollectionList />
            </div>
            {ids.length !== 0 && <Portal>
                <OpenModalBtn
                    modalName="MULTI_MODAL"
                    className="btn btn-theme btn-selected"
                >
                    Submit Selected ({ids.length}) <i className="fas f-14 ml-2 fa-angle-up"></i>
                </OpenModalBtn>
            </Portal>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    ids: state.multi_select.ids || []
})

export default connect(mapStateToProps)(PrivateCollection)
