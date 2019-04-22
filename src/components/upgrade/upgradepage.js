import React, { useState } from 'react'
import Pagelayout from '../common/pagelayout';
import UpdateAdress from "../modals/addressmodal";
import PackagesList from './packageslist';

const UpgradePage = () => {

	const [packageId, setPackage] = useState(null);

	return (
		<Pagelayout>
			<div className="row">
				<div className="col-md-3">
					<ul class="list-group">
						<li class="list-group-item">Update Profile</li>
						<li class="list-group-item">Choose Package</li>
						<li class="list-group-item">Checkout</li>
					</ul>
				</div>
				<div className="col-md-9">
					<h5 className="font-weight-bold mb-3">Update Profile</h5>
					<UpdateAdress />
					<h5 className="font-weight-bold mb-3">Choose Package</h5>
					<PackagesList choosen={packageId} setPackage={setPackage} />
					{/* <h5 className="font-weight-bold mb-3">Checkout</h5> */}
					<button 
						className="btn btn-theme float-right"
					>
						Proceed to checkout
					</button>
				</div>
			</div>
		</Pagelayout>
	)
}

export default UpgradePage
