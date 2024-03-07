import { FC } from 'react'
import { useFetchMoviesQuery } from '../../store/slices/moviesApi/moviesStateApi'
import './Carousel.css'

import CarouselList from '../carouselList/CarouselList'

interface ICarouselProps {
	url: string
	categoryTitle: string
}

const Carousel: FC<ICarouselProps> = ({ url, categoryTitle }) => {
	const { data: movies, isError, isLoading } = useFetchMoviesQuery({ url })

	return (
		<div className='carousel-movies'>
			{isLoading && <h3>Loading</h3>}
			{isError && <h3>Error</h3>}
			<h3 className='carousel-movies__title'>{categoryTitle}</h3>
			<div className='carousel-container'>
				<div className='carousel-wrapper'>
					<CarouselList movieList={movies?.results ?? []} />
				</div>
			</div>
		</div>
	)
}

export default Carousel
