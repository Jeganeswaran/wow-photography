import React from 'react'
import { OpenModalBtn } from '../modals/modalbtns';

const PurchaseBtn = ({ id }) => {
    return (
        <OpenModalBtn
            modalName="ADDRESS_MODAL"
            className="btn btn-theme btn-pill pl-5 pr-5"
        >
            Purchase Plan
        </OpenModalBtn>
    )
}

export default PurchaseBtn
