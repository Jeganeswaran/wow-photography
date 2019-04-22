import React, { useState } from 'react'
import List from '../common/list';

const RequestModal = ({ photo, cats = [] }) => {

    //select category
    const [category, setCategory] = useState(photo.categories_id || "");

    return (
        <div>
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
                        list={[{ id: "", name: "Change Category" }, ...cats]}
                    />
                </select>
            </div>
            <div className="pay-prev-img">
                <img className="w-100" src={photo.thumbnail} alt="" />
            </div>
            <div className="form-group">
                <button className="btn btn-theme btn-block">
                    Pay and Submit
                </button>
            </div>
            <div className="form-group">
                <button className="btn f-14 btn-primary btn-block">
                    Add more photos
                </button>
            </div>
            <div className="form-group">
                <button className="btn f-14 btn-danger btn-block">
                    Pay later
                </button>
            </div>
        </div>
    )
}

export default RequestModal
