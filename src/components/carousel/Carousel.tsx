import { FC } from 'react'
import Slider from 'react-slick'
import { useFetchMoviesQuery } from '../../store/slices/moviesApi/moviesStateApi'
import CarouselItem from '../carouselItem/CarouseItem'
import { settings } from './carouselParams'
import './Carousel.css'

interface ICarouselProps {
	url: string
	categoryTitle: string
}

const Carousel: FC<ICarouselProps> = ({ url, categoryTitle }) => {
	const { data, isError, isLoading } = useFetchMoviesQuery({ url })

	return (
		<div className='carousel-movies'>
			{isLoading && <h3>Loading</h3>}
			{isError && <h3>Error</h3>}
			<h3 className='carousel-movies__title'>{categoryTitle}</h3>
			<div className='carousel-container'>
				<div className='carousel-wrapper'>
					<Slider {...settings}>
						{data?.results?.map(movie => (
							<CarouselItem key={movie.id} {...movie} />
						))}
					</Slider>
				</div>
			</div>
		</div>
	)
}

export default Carousel
