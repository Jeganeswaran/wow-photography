import SignInModal from './signinmodal'
import SignUpModal from './signupmodal'
import LoadingModal from './loadingmodal'
import ChangePwdModal from './changepwdmodal'
import PublishModal from './publishmodal'
import PublishVideoModal from './publishvideomodal'
import ReqpayModal from './requestpay'
import ReqpayVideoModal from './requestpayvideo'
import ImageModal from './imagemodal'
import Multiselectmodal from './multiselectmodal'
import Multiselectvideomodal from './multiselectvideomodal'
import DeleteModal from './deletemodal'
import DeleteVideoModal from './deletevideomodal'
import Updateprofile from './updateprofile'
import SideModal from './sidemodal'
import RejectInfoModal from './rejectinfo'

const selectModal = (modalName) => {
  switch (modalName) {
    case 'SIGNIN_MODAL':
      return SignInModal
    case 'SIGNUP_MODAL':
      return SignUpModal
    case 'LOADING_MODAL':
      return LoadingModal
    case 'CHANGEPWD_MODAL':
      return ChangePwdModal
    case 'PUBLISH_MODAL':
      return PublishModal
    case 'PUBLISHVIDEO_MODAL':
      return PublishVideoModal
    case 'REQPAY_MODAL':
      return ReqpayModal
    case 'REQPAYVIDEO_MODAL':
      return ReqpayVideoModal
    case 'IMAGE_MODAL':
      return ImageModal
    case 'MULTI_MODAL':
      return Multiselectmodal
    case 'MULTIVIDEO_MODAL':
      return Multiselectvideomodal
    case 'DELETE_MODAL':
      return DeleteModal
    case 'DELETEVIDEO_MODAL':
      return DeleteVideoModal
    case 'UPDATE_PROFILE':
      return Updateprofile
    case 'SIDE_MODAL':
      return SideModal
    case 'REJECTINFO_MODAL':
      return RejectInfoModal
    default:
      return null
  }
}

export default selectModal
