import SignInModal from "./signinmodal"
import SignUpModal from "./signupmodal";
import LoadingModal from "./loadingmodal";
import ChangePwdModal from "./changepwdmodal";
import PublishModal from "./publishmodal";
import ReqpayModal from "./requestpay"
import ImageModal from "./imagemodal";
import Multiselectmodal from "./multiselectmodal";
import DeleteModal from "./deletemodal";
import Updateprofile from "./updateprofile";
import SideModal from "./sidemodal";

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
        case "REQPAY_MODAL":
            return ReqpayModal
        case "IMAGE_MODAL":
            return ImageModal
        case "MULTI_MODAL":
            return Multiselectmodal
        case "DELETE_MODAL":
            return DeleteModal
        case "UPDATE_PROFILE":
            return Updateprofile
        case "SIDE_MODAL":
            return SideModal
        default:
            return null;
    }
}

export default selectModal