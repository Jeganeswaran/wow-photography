import React from 'react'
import { connect } from 'react-redux'
import DynamicList from '../common/dynamiclist';

const Sponsors = ({ fetching, sponsors }) => {
    return (
        <div className="row">
            <DynamicList 
                RenderItem={({logo, name, website}) => (
                    <div className="col-md-3">
                        <div>
                            <img src={logo} className="w-100 mb-3" alt={name} />
                        </div>
                        <div className="text-center">
                            <a rel="noopener noreferrer" target="_blank" className="f-16 f-600" href={website}>{name}</a>
                        </div>
                    </div>
                )}
                title="sponsors"
                list={sponsors}
                fetching={fetching}
            />
        </div>
    )
}

const mapStateToProps = ({ landing_page }) => ({
    sponsors: landing_page.data.sponsors || [],
    fetching: landing_page.fetching
})

export default connect(mapStateToProps)(Sponsors)