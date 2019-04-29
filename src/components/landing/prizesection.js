import React from 'react'
import photoOfYear from "../../assets/img/prize/Photo-of-the-year.png";
import besthun from "../../assets/img/prize/100-best.png";
import explorer from "../../assets/img/prize/EXPLORER-AWARDS.png";
import createye from "../../assets/img/prize/Creative-eye-award.png";

const PrizeSection = () => {
    return (
        <section className="post-section bg-light-grey">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="montserrat f-700 theme-red">WOW PHOTO AWARDS 2019 PRIZES</h2>
                    <p className="poppins">Win upto US $2000 in four different award categories</p>
                </div>
                <div className="row">
                    <Prize 
                        src={photoOfYear}
                        title="PHOTO OF THE YEAR 2019"
                        desc={[
                            "One Grand Winner",
                            "US $2000",
                            (<>All Paid International Trip <br></br>Trophy & Certificate</>)
                        ]}
                    />
                    <Prize 
                        src={createye}
                        title="CREATIVE EYE AWARD 2019"
                        desc={[
                            "One Grand Winner",
                            "US $1000",
                            (<>All Paid International Trip <br></br>Trophy & Certificate</>)
                        ]}
                    />
                    <Prize 
                        src={explorer}
                        title="EXPLORER AWARD 2019"
                        desc={[
                            "Six Winners for Final Photo Challange",
                            (<>All Paid International Trip <br></br>Trophy & Certificate</>)
                        ]}
                    />
                    <Prize 
                        src={besthun}
                        title="100 BEST PHOTO AWARDS"
                        desc={[
                            "Certificates",
                            "Photo Exhibition for World Tourism Day"
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

const Prize = ({ src = null, title = "", desc =[] }) => (
    <div className="col-md-6 mb-4">
        <div className="row flex-center">
            <div className="col-md-4">
                <div>
                    <img src={src} className="w-100 prize-img" alt={title} />
                </div>
            </div>
            <div className="col-md-8">
                <h5 className="montserrat f-600 text-center text-md-left">{title}</h5>
                <ul className="f-14 m-0 p-0 list-unstyled text-center text-md-left poppins">
                {
                    desc.map((x,index) => (
                        <li className="mb-1" key={title + index}>{x}</li>
                    ))
                }
                </ul>
            </div>
        </div>
    </div>
)

export default PrizeSection
