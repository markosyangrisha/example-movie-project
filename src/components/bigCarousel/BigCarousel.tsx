import React, { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { URL_NOW_PLAYING } from '../../server/params'
import { useFetchMoviesQuery } from '../../store/slices/moviesApi/moviesStateApi'
import BigCarouselItem from '../bigCarouselItem/BigCarouselItem'
import { bigCarouselSettings } from './bigCarouselParams'
import './BigCarousel.css'

const BigCarousel: FC = React.memo(() => {
	const {
		data: movies,
		isLoading,
		isError,
	} = useFetchMoviesQuery({
		url: URL_NOW_PLAYING,
	})
	const randomMovies = [...(movies?.results ?? [])].sort(
		() => Math.random() - 0.5
	)

	return (
		<div className='big-carousel'>
			{isError && <p>Error</p>}
			{isLoading && <p>Loading...</p>}
			<Slider {...bigCarouselSettings}>
				{randomMovies.map(movie => (
					<BigCarouselItem key={movie.id} {...movie} />
				))}
			</Slider>
		</div>
	)
})

export default BigCarousel
