import React from 'react'
import TabHeader from './tabheader';
import { connect } from 'react-redux'


const PageLayout = ({ children, isToken }) => {

    let links = [
        {
            children: "WOW Pic",
            to: "/",
            exact: true
        },
        {
            children: "Announcements",
            to: "/announcements",
            exact: false
        }
    ];

    if(isToken){
        links.unshift({
            children: "My Collection",
            to: "/my-collection"
        })
    }

    return (
        <div>
            <TabHeader
                tablinks={links}
            />
            <section className="post-section">
                <div className="container">
                    {children}
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = ({user}) => ({
    isToken: user && user.token
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout)
