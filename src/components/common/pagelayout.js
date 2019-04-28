import React from 'react'

const PageLayout = ({ children }) => {
    return (
        <section className="pt-4 pb-4">
            <div className="container">
                {children}
            </div>
        </section>
    )
}

export default PageLayout
