import React from 'react'
import TabHeader from './tabheader';

const PageLayout = ({ children }) => {
    return (
        <div>
            <TabHeader
                tablinks={[
                    {
                        children: "My Collections",
                        to: "/my-collection",
                        exact: false
                    },
                    {
                        children: "Wow Picks",
                        to: "/",
                        exact: true
                    },
                    {
                        children: "Announcements",
                        to: "/announcements",
                        exact: false
                    }
                ]}
            />
            <section className="post-section">
                <div className="container">
                    {children}
                </div>
            </section>
        </div>
    )
}

export default PageLayout
