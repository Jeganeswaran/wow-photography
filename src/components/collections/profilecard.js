import React from 'react'
import { Link } from "react-router-dom"

const ProfileCard = () => {
    return (
        <div className="profile-card border mb-3">
            <img className="profile-bg" src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="bg" />
            <div className="profile-details">
                <div className="flex-center mb-2">
                    <img className="profile-image" src="https://media.licdn.com/dms/image/C4E03AQGWtuxqpxt98w/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=cpwZ5bMaGXpE5dUCgHV433oPjTTUuPi5sd9xtZOm7ag" alt="dillip" />
                </div>
                <p className="mb-0 f-14 f-600 text-center">Dillip Ashokumar</p>
                <p className="mb-1 f-14 text-center">dillip@billiontags.com</p>
                <div className="f-13 text-center">
                    <Link className="mr-2 theme-red text-underline" to="/my-collection">
                        Change password
                    </Link>
                    <Link className="theme-red text-underline" to="/my-collection">
                        Edit profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
