import React from 'react'
import Banner from './banner';
import Post from './post';
import PageLayout from '../common/pagelayout';
import goldMedal from "../../assets/img/gold-medal.png";
import silverMedal from "../../assets/img/silver-medal.png";
import bronzeMedal from "../../assets/img/bronze-medal.png";
import { connect } from 'react-redux'
import useHttp from '../../hooks/http/useHttp';
import { LANDING, landing_url } from '../../redux/actions/constants';
import DynamicList from '../common/dynamiclist';


const LandingPage = ({ dispatch, fetching, wow_pick }) => {

    useHttp(dispatch, LANDING, { url: landing_url }, "landing_page");

    return (
        <div>
            <Banner />
            <PageLayout>
                <div className="row">
                    <DynamicList 
                        RenderItem={(props) => (
                            <div className="col-md-4">
                                <Post {...props} />
                            </div>
                        )}
                        title="wow-picks"
                        list={wow_pick}
                        fetching={fetching}
                    />
                </div>
            </PageLayout>
            <section className="mb-70">
                <div className="container">
                    <h2 className="text-center mb-4">PRIZES</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flex-center border p-3 flex-column text-center">
                                <img src={silverMedal} alt=""  />
                                <h5 className="mb-3 mt-3">2nd Place</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto minima doloremque minus assumenda ducimus soluta, earum quod saepe fuga perspiciatis asperiores pariatur, dolor culpa suscipit. Excepturi corporis nulla sed.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="flex-center border p-3 flex-column text-center">
                                <img src={goldMedal} alt=""  />
                                <h5 className="mb-3 mt-3">1st Place</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto minima doloremque minus assumenda ducimus soluta, earum quod saepe fuga perspiciatis asperiores pariatur, dolor culpa suscipit. Excepturi corporis nulla sed.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="flex-center border p-3 flex-column text-center">
                                <img src={bronzeMedal} alt=""  />
                                <h5 className="mb-3 mt-3">3rd Place</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto minima doloremque minus assumenda ducimus soluta, earum quod saepe fuga perspiciatis asperiores pariatur, dolor culpa suscipit. Excepturi corporis nulla sed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light-grey">
                <div className="container pt-5 pb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab voluptate eligendi nobis voluptates harum vero facilis omnis repellat. Expedita officiis voluptatibus id numquam culpa illo provident aliquid ab inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti deleniti voluptatibus corporis! Velit quo consectetur ad ratione architecto? Veniam ut exercitationem quod unde sint dicta, dolorem sunt reprehenderit officiis!
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = ({ landing_page }) => ({
    wow_pick: landing_page.data.wow_pick || [],
    fetching: landing_page.fetching
})

export default connect(mapStateToProps)(LandingPage)