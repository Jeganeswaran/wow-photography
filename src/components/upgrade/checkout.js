import React from 'react'
import Purchasebtn from './purchasebtn';

const CheckOut = ({packageId}) => {

    const { id, name, photo_count, video_count, country_price} = packageId;

    return (
        <div>
            {id && <div>
                <h5 className="font-weight-bold mb-3">
                    {name} ({photo_count} photo{photo_count > 1 ? 's' : ''} & {video_count} video{video_count > 1 ? 's' : ''})
                </h5>
                <div className="border mb-3">
                    <div className="flex-between bg-light-grey p-2">
                        <p className="m-0">Price</p>
                        <p className="m-0">{country_price.symbol} {country_price.price}</p>
                    </div>
                    <div className="flex-between p-2">
                        <p className="m-0">Transaction fee</p>
                        <p className="m-0">{country_price.symbol} {country_price.tax}</p>
                    </div>
                    <div className="flex-between theme-red bg-light-grey p-2">
                        <p className="f-600 m-0">Total</p>
                        <p className="f-600 m-0">{country_price.symbol} {country_price.tax + country_price.price}</p>
                    </div>
                </div>
            </div> }
            <div className="row">
                <div className="col-lg-8" />
                <div className="col-lg-4">
                    <Purchasebtn id={id} />
                </div>
            </div>
        </div>
    )
}

export default CheckOut
