import React from 'react'
import Package from './package';
import List from '../common/list';
import { packages_url, PACKAGES } from '../../redux/actions/constants';
import useHttp from '../../hooks/http/useHttp';
import { connect } from 'react-redux'
import Loader from '../common/loader';

const PackagesList = ({ packages, dispatch, setPackage, choosen }) => {

    useHttp(dispatch, PACKAGES, { url: packages_url }, "packages")

    if (packages.fetching) {
        return (
            <div className="flex-center">
                <Loader width="30px" height="30px" />
            </div>
        )
    }
    if (packages.data) {
        return (
            <table className="table table-striped border text-center w-100 mb-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Photo upload count</th>
                        <th>Select Plan</th>
                    </tr>
                </thead>
                <tbody>
                    <List 
                        RenderItem={Package}
                        title="packages"
                        list={packages.data}
                        setPackage={setPackage}
                        choosen={choosen}
                    />
                </tbody>
            </table>
        )
    }
    return null

}

const mapStateToProps = ({ packages }) => ({
    packages
})

export default connect(mapStateToProps)(PackagesList)
