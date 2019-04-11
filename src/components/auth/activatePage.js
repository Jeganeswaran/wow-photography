import React from 'react'
// import useDataSubmit from '../../hooks/http/useDataSubmit';
import { urlParams } from '../../utils/urlParams';
import Pagelayout from '../common/pagelayout';
import Submitbtn from '../common/submitbtn';
import { Redirect } from "react-router-dom"
import { activate_url } from '../../redux/actions/constants';
import icon from "../../assets/img/correct.png"

const ActivatePage = ({ location }) => {
    if (!location.search) {
        return <Redirect to="/" />
    }
    const { uid, token } = urlParams(location.search);
    if (!uid && !token) {
        return <Redirect to="/" />
    }
    return (
        <Pagelayout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6 flex-center pb-5 text-center">
                        <div className="p-4 mt-5 mb-5 border">
                            <img src={icon} className="mb-3" alt="" />
                            <h4>Account Activation</h4>
                            <p>
                                You have landed on the Activation Page.<br></br>
                                Please click th below button to activate account.
                            </p>
                            <Submitbtn
                                className="btn btn-theme"
                                title="Activate Account"
                                config={{
                                    url: activate_url,
                                    method: "POST",
                                    data: {
                                        uid, token, client: Math.random() * 1000
                                    }
                                }}
                                success={() => {
                                    location.replace("/");
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        </Pagelayout>
    )
}

export default ActivatePage
