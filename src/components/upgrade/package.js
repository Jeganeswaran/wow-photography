import React from 'react'
import List from '../common/list';

const Package = ({ id, name, photo_count, package_price}) => {

    // const [country, setCountry] = useState(0);

    return (
        <div className="col-md-4 border">
            <div className="text-center flex-center flex-column">
                <div className="pl-4 pr-4 pt-4">
                    <h4 className="font-weight-bold mt-2">{name}</h4>
                    <p className="f-14">
                        Can upload upto <span className="font-weight-bold">{photo_count}</span> photos
                    </p>
                    <div className="form-group mt-3">
                        <select 
                            className="form-control f-14"
                        >
                            <List 
                                RenderItem={({country}, index) => (
                                    <option value="1">{country}</option>
                                )}
                                list={package_price}
                                title={`countries-${id}`}
                            />
                        </select>
                    </div>
                    <h1 className="font-weight-bold mt-3">₹{package_price[0].price}</h1>
                </div>
                <div className="pt-3 pb-4">
                    <button className="btn btn-theme btn-pill pl-5 pr-5">
                        Purchase Plan
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Package
