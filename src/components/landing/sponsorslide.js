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
				<a 
					rel="noopener noreferrer" 
					target="_blank" 
					href={website} 
					className="d-block sponsor" 
					key={id}
				>
					<div className="sponsor-img mb-2">
						<img src={logo} alt={name} />
					</div>
				</a>
			))
		}
		</Carousel>
	)
}

export default SponsorSlide
