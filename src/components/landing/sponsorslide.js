import React from 'react'
import Carousel from 'nuka-carousel';
// import List from '../common/list';

const SponsorSlide = ({ sponsors }) => {

	return (
		<Carousel 
			slidesToShow={3} 
			autoplay 
			wrapAround
			renderCenterLeftControls={null}
			renderCenterRightControls={null}
			renderBottomCenterControls={null}
		>
		{
			sponsors.map(({logo, name, website, id}) => (
				<div className="sponsor" key={id}>
					<div className="sponsor-img">
						<img src={logo} alt={name} />
					</div>
					<div className="text-center">
						<a rel="noopener noreferrer" target="_blank" className="f-18 f-600" href={website}>{name}</a>
					</div>
				</div>
			))
		}
		</Carousel>
	)
}

export default SponsorSlide
