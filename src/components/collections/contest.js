import React, { useState } from 'react'
import GuideLines from './guidelines';
import List from '../common/list';
import Loader from '../common/loader';
import useHttp from '../../hooks/http/useHttp';
import { connect } from 'react-redux'
import { CATEGORIES, cat_url } from '../../redux/actions/constants';
import useDataSubmit from '../../hooks/http/useDataSubmit';
import { photos_url } from '../../redux/actions/constants';
import { addToast, openModal } from '../../redux/actions/common';
import { addPhotoSuccess } from '../../redux/actions/user';
import LoadingBtn from '../common/loadingbtn';
import Progress from './progress';

const Contest = ({ fetching, data, dispatch }) => {

    //select category
    const [category, setCategory] = useState("");

    //terms
    const [terms, setTerms] = useState(false);

    //handle file
    const [photo, setPhoto] = useState(null);


    //load categories
    useHttp(dispatch, CATEGORIES, { url: cat_url }, "categories");

    const { setReq, res } = useDataSubmit(
        (response) => {
            dispatch(addPhotoSuccess(data));
            setCategory("");
            setPhoto(null);
            setTerms(false);
            dispatch(addToast("Photo has been submited"));
            dispatch(openModal("REQPAY_MODAL", { photo: response, isContest: true }));
        },
        (response) => {
            dispatch(addToast(response, false));
        }
    );

    //handle file input change
    const handleSubmit = () => {
        //check if file size less than 20MB
        if (photo.size > 20971520) {
            dispatch(addToast("Image size must be less than 20MB", false));
            return;
        }
        let postData = new FormData();
        postData.append("photo", photo);
        postData.append("categories_id", category);
        setReq(x => ({
            ...x,
            count: x.count + 1,
            config: {
                url: photos_url,
                method: "POST",
                data: postData,
                crossDomain: true,
                contentType: false,
                processData: true
            }
        }))
    }

    if (fetching) {
        return (
            <div className="w-100 pt-3 pb-3 flex-grow-1 flex-center">
                <Loader width="30px" height="30px" />
            </div>
        )
    }
    if (data && data.length > 0) {
        return (
            <div className="pt-3">
                <div className="form-group">
                    <select
                        value={category}
                        onChange={({ target }) =>
                            setCategory(target.value)
                        }
                        className="form-control f-14"
                    >
                        <List
                            RenderItem={({ name, id }) => (
                                <option value={id}>
                                    {name}
                                </option>
                            )}
                            title="cats"
                            list={[{ id: "", name: "Choose Category" }, ...data]}
                        />
                    </select>
                </div>
                <div className="pb-2">
                    <div className="row flex-wrap">
                        <div className="col-md-6 pr-md-2">
                            <label
                                className="image-upload-section flex-center text-center"
                                htmlFor="addPhoto"
                            >
                                <div>
                                    <input
                                        id="addPhoto"
                                        name="new_photo"
                                        onChange={({ target }) => {
                                            const files = target.files;
                                            if (files) {
                                                setPhoto([...files][0])
                                            }
                                        }}
                                        style={{ display: `none` }}
                                        type="file"
                                        accept="image/*"
                                    />
                                    <i className="fa fa-plus"></i>
                                    <p>Add new photograph</p>
                                </div>
                            </label>
                        </div>
                        <div className="col-md-6 pr-ml-2">
                            <div className="image-upload-section flex-center text-center">
                                {
                                    photo ?
                                        <img className="img-preview" src={URL.createObjectURL(photo)} alt="" /> :
                                        <div>
                                            <i className="fas fa-file-image"></i>
                                            <p>Image Preview</p>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <GuideLines />
                <div className="form-group">
                    <label className="f-14 d-flex align-items-center theme-red" htmlFor="termsIp">
                        <input
                            type="checkbox"
                            id="termsIp"
                            checked={terms}
                            className="mr-2"
                            onChange={() => {
                                setTerms(term => !term)
                            }}
                        />
                        I agree to all terms and conditions
                    </label>
                </div>
                {
                    photo && res.fetching &&
                    <div className="border p-2 mb-3">
                        <p className="f-14 mb-0">{photo.name}</p>
                        <small className="text-muted">{(photo.size / 1048576).toPrecision(2)}MB</small>
                        <Progress />
                    </div>
                }
                {
                    photo && res.data &&
                    <div className="border p-2 mb-3">
                        <p className="f-14 mb-0">{photo.name}</p>
                        <small className="text-muted">{(photo.size / 1048576).toPrecision(2)}MB</small>
                        <Progress complete />
                    </div>
                }
                <div className="d-flex justify-content-end align-items-end">
                    <LoadingBtn
                        disabled={category && photo && terms ? false : true}
                        className="btn btn-theme pl-4 pr-4"
                        fetching={res.fetching}
                        title={"Submit"}
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        )
    }
    return null
}

const mapStateToProps = ({ categories }) => ({
    ...categories
})

export default connect(mapStateToProps)(Contest)