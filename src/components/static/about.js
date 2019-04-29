import React from 'react'
import EnterBtn from '../landing/EnterBtn';
// import Pagelayout from '../common/pagelayout';

const About = () => {
    return (
        <div>
            <div className="static-content-header flex-center">
                <div className="container">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="container static-content">
                <p>LIFE is a JOURNEY, a Journey filled with memories and the memory layers are mere images. All our experiences are stored as 'visuals' in our memory layers. Time to showcase your memory of Joy, Love, Celebration, Excitement, Surprise and more through 'Photography' .</p>
                <p>Encouraging your best moments of life 'frozen as pictures' focusing World Tourism.  WoW Photos Awards started its first edition in 2018, having the national level entrants curated the best Indian clicks that was widely appreciated during the World Tourism Day supported by the Department of Tourism Tamilnadu, India. Now in 2019:second edition, we are stepping forward internationally to encourage your creative visual skills of Global Tourism.</p>
                <p>WOW PHOTO AWARDS is crafted to encourage the world’s most outstanding and talented souls in the field of photography focusing Travel and Tourism. "WOW PHOTO AWARDS" is an open contest to all Professionals and Amateur Photographers across the world.</p>
                <p>WOW PHOTO AWARDS 2019 accepting entries from 1st May 2019 under 12 categories. Out of the entries, 6 Winners get International Photo Challenge Trip, 2 Grand Winners and 100 Best Photo Appreciation Awards and more.</p>
                <p>Are you ready to transport your experience through captures?</p>
                <div className="flex-center pt-3">
                    <EnterBtn className="btn pl-5 pr-5 btn-outline-info" />
                </div>
            </div>
        </div>
    )
}

export default About
