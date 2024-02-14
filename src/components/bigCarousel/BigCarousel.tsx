import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { URL_NOW_PLAYING } from '../../server/params'
import { BASE_IMAGE_URL } from '../../server/server'
import { useFetchMoviesQuery } from '../../store/slices/moviesServerAPI'
import './BigCarousel.css'

const settings = {
	infinite: true,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 528,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
}

const BigCarousel: FC = () => {
	const { data, isLoading, isError } = useFetchMoviesQuery({
		url: URL_NOW_PLAYING,
	})
	const navigate = useNavigate()

	const randomMovies = [...(data?.results ?? [])].sort(
		() => Math.random() - 0.5
	)

	return (
		<div className='big-carousel'>
			{isError && <p>Error</p>}
			{isLoading && <p>Loading...</p>}
			<Slider {...settings}>
				{randomMovies.map(movie => (
					<div
						onClick={() => navigate(`/movieDetails/${movie.id}`)}
						key={movie.id}
						className='big-carousel__item'
					>
						<img
							src={`${BASE_IMAGE_URL}${movie.backdrop_path}`}
							alt={movie.title}
						/>
						<div className='big-carousel__item-info'>
							<span className='big-carousel__item-info-title'>
								{movie.title}
							</span>
							<span className='big-carousel__item-info-vote'>
								Vote average: {movie.vote_average}
							</span>
							<span className='big-carousel__item-info-language'>
								{movie.original_language}
							</span>
						</div>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default BigCarousel
