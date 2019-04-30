import React, { useState } from 'react'
import List from '../common/list';
import { Link } from "react-router-dom"
import useDataSubmit from '../../hooks/http/useDataSubmit';
import LoadingBtn from '../common/loadingbtn';
import { photos_url } from '../../redux/actions/constants';

const RequestModal = ({ photo, categories, isContest, user, addPhotoSuccess, addToast, closeModal }) => {

    //terms
    const [terms, setTerms] = useState(false);

    //select category
    const [category, setCategory] = useState(photo.categories_id || "");

    const { res, setReq } = useDataSubmit(
        (data) => {
            addPhotoSuccess(data);
            closeModal();
            addToast("Photo Submitted");
        },
        (data) => {
            addToast(data, false);
        }
    );

    return (
        <div>
            <div className="pay-prev-img">
                <img className="w-100" src={photo.thumbnail} alt="" />
            </div>
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
                        list={[{ id: "", name: "Change Category" }, ...categories.data]}
                    />
                </select>
            </div>
            <div>
                <div className="d-flex align-items-center form-group mb-2">
                    <input
                        type="checkbox"
                        id="termsIp"
                        checked={terms}
                        className="mr-2"
                        onChange={() => {
                            setTerms(term => !term)
                        }}
                    />
                    <span className="f-14 d-flex align-items-center">
                        I agree to all  <Link className="theme-red ml-1" to="/terms-and-conditions"> Terms & Conditions </Link>
                    </span>
                </div>
                <p className="f-10 theme-red">Note: Categories and photos cannot be changed after submission</p>
            </div>
            <div className="form-group">
                {
                    user.userprofile && user.userprofile.points ?
                    <LoadingBtn 
                        disabled={category && terms ? false : true}
                        fetching={res.fetching}
                        className="btn btn-theme btn-block"
                        title="Pay and Submit"
                        onClick={() => {
                            setReq(x => ({
                                ...x,
                                count: x.count + 1,
                                config: {
                                    url: photos_url + "photo_submit/",
                                    method: "POST",
                                    data: [{
                                        categories: category,
                                        photo: photo.id
                                    }]
                                }
                            }))
                        }}
                    /> :
                    <Link to="/upgrade" className="btn btn-theme btn-block">
                        Pay and Submit
                    </Link>
                }            
            </div>
            {isContest && <div className="form-group">
                <Link to="/my-profile/enter-to-contest" className="btn f-14 btn-primary btn-block">
                    Add more photos
                </Link>
            </div>}
            {isContest && <div className="form-group">
                <Link to="/my-profile/private-photographs" className="btn f-14 btn-danger btn-block">
                    Pay Later
                </Link>
            </div>}
        </div>
    )
}

export default RequestModal
