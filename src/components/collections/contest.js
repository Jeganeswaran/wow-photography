import React, { useState } from 'react'
import GuideLines from './guidelines';
import List from '../common/list';
import Loader from '../common/loader';
import useHttp from '../../hooks/http/useHttp';
import { connect } from 'react-redux'
import { CATEGORIES, cat_url } from '../../redux/actions/constants';

const Contest = ({ fetching, data, dispatch }) => {
    
    //select category
    const [category, setCategory] = useState("");

    //terms
    const [terms, setTerms] = useState(false);

    //handle file
    const [photo, setPhoto] = useState(null);

    //load categories
    useHttp(dispatch, CATEGORIES, { url: cat_url }, "categories");

    
    if(fetching){
        return (
            <div className="w-100 pt-3 pb-3 flex-grow-1 flex-center">
                <Loader width="30px" height="30px" />
            </div>
        )
    }
    if(data && data.length > 0) {
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
                        <div className="col pr-2">
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
                        <div className="col pl-2">
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
                <div className="d-flex justify-content-end align-items-end">
                    <button
                        disabled={category && photo ? false : true}
                        className="btn btn-theme pl-4 pr-4"
                    >
                        Continue
                    </button>
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