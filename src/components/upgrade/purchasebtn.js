import React, {useEffect} from 'react'
import {OpenModalBtn} from '../modals/modalbtns';
import {connect} from 'react-redux'
import useDataSubmit from '../../hooks/http/useDataSubmit';
import LoadingBtn from '../common/loadingbtn';
import {payment_success_url, transcation_url} from '../../redux/actions/constants';
import {addToast} from '../../redux/actions/common';
import {withRouter} from "react-router";

const PurchaseBtn = ({history, user, id}) => {

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    });

    const {setReq, res} = useDataSubmit(
        (data) => {
            const options = {
                "key": data.razorpay_api_key,
                "amount": data.amount_in_paisa,
                "description": data.package,
                "order_id": data.order_id,
                "handler": function (response) {
                    const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = response
                    paymentSuccess.setReq(x => ({
                        ...x,
                        count: x.count + 1,
                        config: {
                            url: payment_success_url,
                            method: "POST",
                            data: {
                                razorpay_payment_id,
                                razorpay_order_id,
                                razorpay_signature
                            },
                        }
                    }))
                },
                "prefill": {
                    "name": `${user.first_name} ${user.last_name}`,
                    "email": user.email
                },
                "theme": {
                    "color": "#df006f"
                }
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.on('payment.failed', function (response) {
                addToast(response.error.description, false)
            });
            paymentObject.open();
        },
        (data) => {
            addToast(data, false)
        }
    );

    const paymentSuccess = useDataSubmit(
        () => {
            history.push("/my-profile");
        },
        (data) => {
            addToast(data, false)
        }
    );

    if (user.user_address) {
        return (
            <LoadingBtn
                fetching={res.fetching || paymentSuccess.res.fetching}
                className="btn btn-theme btn-block"
                title="Proceed to checkout"
                onClick={() => {
                    setReq(x => ({
                        ...x,
                        count: x.count + 1,
                        config: {
                            url: transcation_url,
                            method: "POST",
                            data: {
                                package_id: id
                            },
                        }
                    }))
                }}
            />
        )
    }
    return (
        <OpenModalBtn
            modalName="ADDRESS_MODAL"
            modalProps={{package: id}}
            className="btn btn-theme btn-pill pl-5 pr-5"
        >
            Purchase Plan
        </OpenModalBtn>
    )
}

const mapStateToProps = ({user}) => ({
    user
})

const mapDispatchToProps = {
    addToast
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PurchaseBtn))
