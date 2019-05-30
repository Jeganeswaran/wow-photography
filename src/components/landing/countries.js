import React from 'react'
import { connect } from 'react-redux'
import Carousel from 'nuka-carousel';
import Loader from '../common/loader';

const Countries = ({ fetching, countries }) => {
    if (fetching) {
        return (
            <div className="flex-center">
                <Loader width="30px" height="30px" />
            </div>
        )
    }
    if (countries.length !== 0) {
        return (
            <div className="post-section border-top">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="montserrat f-700" style={{ color: `rgba(0, 0, 0, 0.6)` }}>Participation Growing Worldwide</h2>
                    </div>
                    <div className="row">
                        <Carousel
                            slidesToShow={3}
                            autoplay
                            wrapAround
                            renderCenterLeftControls={null}
                            renderCenterRightControls={null}
                            renderBottomCenterControls={null}
                        >
                            {
                                countries.map(({ id, thumbnail, title }) => (
                                    <div className="flex-center flex-column mb-2" key={id}>
                                        <img height='80' src={thumbnail} alt={title} />
                                        <h6 className="text-center mt-2">{title}</h6>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
    return null
}

const mapStateToProps = ({ landing_page }) => ({
    countries: landing_page.data.wow_country || [],
    fetching: landing_page.fetching
})

export default connect(mapStateToProps)(Countries)