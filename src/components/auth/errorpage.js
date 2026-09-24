import React from 'react';
import Pagelayout from '../common/pagelayout';
import icon from "../../assets/img/browser.png";
import { Link } from "react-router-dom";

const FailurePage = () => {
    return (
        <Pagelayout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6 flex-center pb-5 text-center">
                        <div className="p-4 mt-5 mb-5 border">
                            <img src={icon} className="mb-3" alt="" />
                            <h4>Payment Failed</h4>
                            <p>
                                You have landed on the payment failure page.<br></br>
                                Please click the below button to go to homepage.
                            </p>
                            <Link className="btn btn-theme" to="/">
                                Go to homepage
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        </Pagelayout>
    )
}

export default FailurePage