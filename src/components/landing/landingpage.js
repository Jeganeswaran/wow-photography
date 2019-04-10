import React from 'react'
import Banner from './banner';
import Post from './post';
import PageLayout from '../common/pagelayout';
import Loader from '../common/loader';

const LandingPage = () => {
    return (
        <div>
            <Banner />
            <PageLayout>
                <div className="row">
                    <div className="col-md-4">
                        <Post
                            image={`https://source.unsplash.com/random/400x250/?tourism`}
                        />
                    </div>
                    <div className="col-md-4">
                        <Post
                            image={`https://source.unsplash.com/random/410x210/?tourism`}
                        />
                    </div>
                    <div className="col-md-4">
                        <Post
                            image={`https://source.unsplash.com/random/410x230/?tourism`}
                        />
                    </div>
                    <div className="col-md-4">
                        <Post
                            image={`https://source.unsplash.com/random/410x225/?tourism`}
                        />
                    </div>
                    <div className="col-md-4">
                        <Post
                            image={`https://source.unsplash.com/random/410x275/?tourism`}
                        />
                    </div>
                    <div className="col-md-4">
                        <Post
                            image={`https://source.unsplash.com/random/501x275/?tourism`}
                        />
                    </div>
                    <div className="col-md-4">
                        <Post
                            image={`https://source.unsplash.com/random/502x275/?tourism`}
                        />
                    </div>
                    <div className="col-md-4">
                        <Post
                            image={`https://source.unsplash.com/random/503x275/?tourism`}
                        />
                    </div>
                    <div className="col-md-4">
                        <Post
                            image={`https://source.unsplash.com/random/504x275/?tourism`}
                        />
                    </div>
                    <div className="col-md-4">
                        <Post
                            image={`https://source.unsplash.com/random/505x275/?tourism`}
                        />
                    </div>
                    <div className="col-md-4">
                        <Post
                            image={`https://source.unsplash.com/random/506x275/?tourism`}
                        />
                    </div>
                    <div className="col-md-4">
                        <Post
                            image={`https://source.unsplash.com/random/507x275/?tourism`}
                        />
                    </div>
                </div>
            </PageLayout>
        </div>
    )
}

export default LandingPage
