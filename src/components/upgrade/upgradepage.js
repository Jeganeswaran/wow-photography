import React from 'react'
import Package from './package';
import Loadlist from '../common/loadlist';
import { packages_url, PACKAGES } from '../../redux/actions/constants';

const UpgradePage = () => {
	return (
		<div>
			<div className="static-content-header flex-center">
				<div className="container">
					<h1>Purchase Plan</h1>
				</div>
			</div>
			<div className="container mb-4 pt-3" style={{ minHeight: `400px` }}>
				<Loadlist
					RenderItem={Package}
					url={packages_url}
					objName="packages"
					type={PACKAGES}
				/>
			</div>
		</div>
	)
}

export default UpgradePage
