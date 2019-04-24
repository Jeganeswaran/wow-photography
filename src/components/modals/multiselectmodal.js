import React, { useEffect } from 'react'
import { connect } from "react-redux";
import CenterLoader from './centerloader';
import { CloseModalWrapper, ModalCon } from './modalbtns';
import { CATEGORIES, cat_url } from '../../redux/actions/constants';
import { addPhotoSuccess } from '../../redux/actions/user';
import { addToast, closeModal } from '../../redux/actions/common';
import { loadData } from '../../redux/actions/http';
import MultiSubmit from '../collections/multisubmit';


//MULTI_MODAL
const MultiModal = props => {

    //load categories
    useEffect(() => {
        props.loadData(CATEGORIES, { url: cat_url }, "categories");
    }, [])

    if(props.categories.fetching){
        return (
            <div className="modal-wrapper">
                <CenterLoader />
            </div>
        )
    }
    if(props.categories.data.length > 0){
        return (
            <CloseModalWrapper className="modal-wrapper">
                <ModalCon className="modal-container contest-modal">
                    <div className="mb-4">
                        <h3 className="font-weight-bold">Submit Photos</h3>
                    </div>
                    <MultiSubmit {...props} />
                </ModalCon>
            </CloseModalWrapper>
        )
    }
    return null
}

const mapStateToProps = ({ categories, user }) => ({
    categories, user
})

const mapDispatchToProps = {
    addPhotoSuccess, addToast, closeModal, loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiModal)