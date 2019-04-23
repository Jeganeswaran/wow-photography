import React, { useEffect } from 'react'
import RequestModal from '../collections/reqmdal';
import { connect } from "react-redux";
import CenterLoader from './centerloader';
import ModalLayout from './modallayout';
import { CATEGORIES, cat_url } from '../../redux/actions/constants';
import { addPhotoSuccess } from '../../redux/actions/user';
import { addToast, closeModal } from '../../redux/actions/common';
import { loadData } from '../../redux/actions/http';


//REQPAY_MODAL
const ReqpayModal = props => {

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
            <ModalLayout 
                title="Want to submit photo"    
                children={<RequestModal {...props} />}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(ReqpayModal)