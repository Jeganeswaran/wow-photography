import React, { useState } from 'react'
import Pagelayout from '../common/pagelayout';
import UpdateAdress from "../modals/addressmodal";
import PackagesList from './packageslist';
import { connect } from 'react-redux';
import CheckOut from './checkout';

const UpgradePage = ({ isAddr }) => {

	const [packageId, setPackage] = useState({});
	const [tab, setTab] = useState(isAddr ? 2 : 1);

	return (
		<Pagelayout>
			<div className="row" style={{minHeight: `400px`}}>
				<div className="col-md-3">
					<ul class="list-group upgradeUl">
						<li
							className="list-group-item f-600 f-18"
						>
							Steps to Upgrade
						</li>
						<li
							onClick={() => setTab(1)}
							className={`list-group-item  ${tab === 1 ? 'list-active' : ''} pointer`}
						>
							1. Update Profile
							{isAddr && <i className="fa fa-check-circle float-right color-green"></i>}
						</li>
						<li 
							onClick={() => {
								if(isAddr){
									setTab(2)
								}
							}} 
							className={`list-group-item ${!isAddr ? 'disabled' : ''} ${tab === 2 ? 'list-active' : ''} pointer`}
						>
							2. Choose Package
							{packageId.id && <i className="fa fa-check-circle float-right color-green"></i>}
						</li>
						<li 
							onClick={() => {
								if(packageId.id && isAddr){
									setTab(3)
								}
							}} 
							className={`list-group-item ${packageId.id && isAddr ? '' : 'disabled'} ${tab === 3 ? 'list-active' : ''} pointer`}
						>
							3. Checkout
						</li>
					</ul>
				</div>
				<div className="col-md-9">
					{
						tab === 1 &&
						<div>
							<h5 className="font-weight-bold mb-3">Update Profile</h5>
							<UpdateAdress />
						</div>
					}
					{
						tab === 2 &&
						<div>
							<h5 className="font-weight-bold mb-3">Choose Package</h5>
							<PackagesList choosen={packageId} setPackage={setPackage} />
						</div>
					}
					{
						tab === 3 &&
						<div>
							<CheckOut packageId={packageId} />
						</div>
					}
				</div>
			</div>
		</Pagelayout>
	)
}

const mapStateToProps = ({ user }) => ({
    isAddr: user && user.user_address
})

export default connect(mapStateToProps)(UpgradePage)