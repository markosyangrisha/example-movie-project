import { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { BASE_IMAGE_URL } from '../../server/server'
import { useFetchMoviesQuery } from '../../store/fetchMovies/serverAPI'
import { URL_NOW_PLAYING } from '../../server/params'
import './BigCarousel.css'

const settings = {
	infinite: true,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 1,
}

const BigCarousel: FC = () => {
	const { data } = useFetchMoviesQuery(URL_NOW_PLAYING)

	return (
		<div className='big-carousel'>
			<Slider {...settings}>
				{data?.results.map(movie => (
					<div key={movie.id} className='big-carousel__item'>
						<img
							src={`${BASE_IMAGE_URL}${movie.poster_path}`}
							alt={movie.title}
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default BigCarousel
