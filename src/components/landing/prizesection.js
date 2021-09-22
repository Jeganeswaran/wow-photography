import React from 'react'
import GrandWinnerImg from '../../assets/img/prize/2021-WOW-Grand-Winner.png'
import CreativeEyeImg from '../../assets/img/prize/2021-WOW-Creative-Eye.png'
import ExplorerImg from '../../assets/img/prize/2021-WOW-Explorer.png'
import Best100Img from '../../assets/img/prize/2021-WOW-100.png'
import EnterBtn from "./EnterBtn";

const PrizeSection = () => {
    return (
        <section className="post-section bg-light-grey">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="montserrat f-700 theme-red">
                        WOW TAMILNADU 2021 Rewards & Prizes
                    </h2>
                    <p className="poppins">
                        Win upto 6 lakhs worth of prizes in four different award categories
                    </p>
                </div>
                <div className="row">
                    <Prize
                        src={GrandWinnerImg}
                        title={<><span>WOW TAMILNADU 2021</span><br/><span>Grand Winner</span></>}
                        desc={['WoW Gift worth 2 lakhs - (One Grand Winner) +Trophy + Certificate']}
                    />
                    <Prize
                        src={CreativeEyeImg}
                        title="CREATIVE EYE AWARD 2021"
                        desc={[
                            'Two Winners ( 1 Photo 1 Video)',
                            'WoW Gift worth 1 lakh each + Trophy + Certificate',
                        ]}
                    />
                    <Prize
                        src={ExplorerImg}
                        title="WOW TAMILNADU EXPLORER AWARD 2021"
                        desc={[
                            '12 Winners in Photo Categories',
                            '2 Winners in Video Categories',
                            'Smart Phone + Trophy & Certificate',
                        ]}
                    />
                    <Prize
                        src={Best100Img}
                        title="100 WOW 2021"
                        desc={['50 WoW Photos 50 WoW Videos', 'Mementos + Certificates']}
                    />
                </div>
            </div>
            <div className="flex-center pt-3">
                <EnterBtn className="btn pl-5 pr-5 btn-info"/>
            </div>
        </section>
    )
}

const Prize = ({src = null, title = '', desc = []}) => (
    <div className="col-md-6 mb-4">
        <div className="row flex-center">
            <div className="col-md-4">
                <div>
                    <img src={src} className="w-100 prize-img" alt={title}/>
                </div>
            </div>
            <div className="col-md-8">
                <h5 className="montserrat f-600 text-center text-md-left">{title}</h5>
                <ul className="f-14 m-0 p-0 list-unstyled text-center text-md-left poppins">
                    {desc.map((x, index) => (
                        <li className="mb-1" key={title + index}>
                            {x}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
)

export default PrizeSection
