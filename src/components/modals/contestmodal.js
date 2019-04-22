import React from 'react'
import { CloseModalWrapper, ModalCon } from './modalbtns';
import CenterLoader from './centerloader';
import useHttp from '../../hooks/http/useHttp';
import { connect } from 'react-redux'
import { CATEGORIES, cat_url } from '../../redux/actions/constants';
import Contest from '../collections/contest';

//CONTEST_MODAL
const ContestModal = ({ dispatch, fetching, data }) => {

    useHttp(dispatch, CATEGORIES, { url: cat_url }, "categories");
    
    return (
        <CloseModalWrapper className="modal-wrapper">
            {
                fetching ? 
                    <CenterLoader /> : 
                    data && data.length > 0 ?
                    <ModalCon className="modal-container contest-modal">
                        <Contest categories={data} />
                    </ModalCon> :
                    null
            }
        </CloseModalWrapper>
    )
}

const mapStateToProps = ({ categories }) => ({
    ...categories
})

export default connect(mapStateToProps)(ContestModal)