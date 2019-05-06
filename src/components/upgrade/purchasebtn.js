import React from 'react'
import { OpenModalBtn } from '../modals/modalbtns';
import { connect } from 'react-redux'
import useDataSubmit from '../../hooks/http/useDataSubmit';
import LoadingBtn from '../common/loadingbtn';
import { transcation_url } from '../../redux/actions/constants';
import { addToast } from '../../redux/actions/common';

const PurchaseBtn = ({ user, id }) => {

    const { setReq, res } = useDataSubmit(
        (data) => {
            if (data.approval_url) {
                window.location.replace(data.approval_url);
            } else {
                document.write(
                    `<html>
                    <head>
                    <title>Sub-merchant checkout page</title>
                    </head>
                    <body>
                    <h3 style="text-align:center">DO NOT REFRESH THIS PAGE</h3>
                    <form id="nonseamless" method="post" name="redirect"
                    action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction" style="display:none;">
                    <input type="text" id="encRequest" name="encRequest" value="${data.encRequest}"><br>
                    <input type="text" name="access_code" id="access_code" value="${data.access_code}"><br>
                    <input type="submit" name="access_code" value="submit">
                    </form>
                    <script>
                        redirect.submit();
                    </script>
                    </body>
                    </html>`
                );
            }
        },
        (data) => {
            addToast(data, false)
        }
    );

    if (user.user_address) {
        return (
            <LoadingBtn
                fetching={res.fetching}
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
                                package: id
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
            modalProps={{ package: id }}
            className="btn btn-theme btn-pill pl-5 pr-5"
        >
            Purchase Plan
        </OpenModalBtn>
    )
}

const mapStateToProps = ({ user }) => ({
    user
})

const mapDispatchToProps = {
    addToast
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseBtn)
