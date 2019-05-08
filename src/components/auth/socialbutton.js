import React from 'react'
import SocialLogin from 'react-social-login'
import LoadingBtn from '../common/loadingbtn';
 
const SButton = ({ title, className, triggerLogin, fetching = false}) => (
    <LoadingBtn 
        fetching={fetching}
        onClick={triggerLogin}
        className={className}
        title={title} 
    />
)

const SocialButton = SocialLogin(SButton);

export default SocialButton;