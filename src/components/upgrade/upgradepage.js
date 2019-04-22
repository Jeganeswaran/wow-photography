import React from 'react'
import Package from './package';
import Loadlist from '../common/loadlist';
import { packages_url, PACKAGES } from '../../redux/actions/constants';
import Pagelayout from '../common/pagelayout';
import UpdateAdress from "../modals/addressmodal";

const UpgradePage = () => {
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
					<table className="table table-striped border text-center w-100 mb-3">
						<thead>
							<tr>
								<th>Name</th>
								<th>Price</th>
								<th>Photo upload limit</th>
								<th>Select Plan</th>
							</tr>
						</thead>
						<tbody>
							<Loadlist
								RenderItem={Package}
								url={packages_url}
								objName="packages"
								type={PACKAGES}
							/>
						</tbody>
					</table>
				</div>
			</div>
		</Pagelayout>
	)
}

export default UpgradePage
