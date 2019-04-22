import SignInModal from "./signinmodal"
import SignUpModal from "./signupmodal";
import LoadingModal from "./loadingmodal";
import ChangePwdModal from "./changepwdmodal";
import PublishModal from "./publishmodal";
import AddressModal from "./addressmodal";
import ReqpayModal from "./requestpay"

const selectModal = modalName => {
    switch (modalName) {
        case "SIGNIN_MODAL":
            return SignInModal
        case "SIGNUP_MODAL":
            return SignUpModal
        case "LOADING_MODAL":
            return LoadingModal
        case "CHANGEPWD_MODAL":
            return ChangePwdModal
        case "PUBLISH_MODAL":
            return PublishModal
        case "ADDRESS_MODAL":
            return AddressModal
        case "REQPAY_MODAL":
            return ReqpayModal
        default:
            return null;
    }
}

export default selectModal