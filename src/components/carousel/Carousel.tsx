import { FC } from 'react'
import Slider from 'react-slick'
import { IMoviesData } from '../../server/moviesTypes'
import CarouseItem from '../carouselItem/CarouseItem'
import './Carousel.css'

interface ICarouselProps {
	items?: IMoviesData[]
	categoryTitle: string
}

const settings = {
	infinite: true,
	speed: 500,
	slidesToScroll: 4,
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
}

const MuCarousel: FC<ICarouselProps> = ({ items = [], categoryTitle }) => {
	return (
		<div className='carousel-movies'>
			<h3 className='carousel-movies__title'>{categoryTitle}</h3>
			<div className='carousel-container'>
				<div className='carousel-wrapper'>
					<Slider {...settings}>
						{items?.map(movie => (
							<CarouseItem key={movie.id} {...movie} />
						))}
					</Slider>
				</div>
			</div>
		</div>
	)
}

export default MuCarousel
