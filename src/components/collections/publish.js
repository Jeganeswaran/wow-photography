import React, { useState } from 'react'
import Loadlist from '../common/loadlist';
import { cat_url, CATEGORIES, photos_url } from '../../redux/actions/constants';
import useDataSubmit from '../../hooks/http/useDataSubmit';
import { connect } from 'react-redux'
import LoadingBtn from '../common/loadingbtn';
import { closeModal, addToast } from '../../redux/actions/common';
import { addPhotoSuccess } from '../../redux/actions/user';

const PubLish = ({ id, addPhotoSuccess, addToast, closeModal }) => {

    const [choosenId, chooseId] = useState(null);

    const { res, setReq } = useDataSubmit(
        (data) => {
            addPhotoSuccess(data);
            closeModal();
            addToast("Photo Published");
        },
        (data) => {
            addToast(data, false);
        }
    );

    return (
        <div>
            <ul className="cat-list">
                <Loadlist
                    RenderItem={({ name, id }) => (
                        <li
                            onClick={() => {
                                chooseId(id)
                            }}
                            className={choosenId === id ? "cat-active" : "border"}
                        >
                            {name}
                        </li>
                    )}
                    url={cat_url}
                    objName="categories"
                    type={CATEGORIES}
                />
            </ul>
            <LoadingBtn
                fetching={res.fetching}
                className="btn btn-theme btn-block"
                disabled={!choosenId}
                onClick={() => {
                    setReq(x => ({
                        ...x,
                        count: x.count + 1,
                        config: {
                            url: photos_url + id + "/photo_submit/",
                            method: "POST",
                            data: {
                                category: choosenId
                            }
                        }
                    }))
                }}
            >
                Publish
            </LoadingBtn>
        </div>
    )
}

const mapStateToProps = ({ categories }) => ({
    categories
})

const mapDispatchToProps = {
    addPhotoSuccess, addToast, closeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(PubLish)
