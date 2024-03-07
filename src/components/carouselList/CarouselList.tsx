import { FC } from 'react'
import Slider from 'react-slick'
import { IMoviesData } from '../../server/moviesTypes'
import { settings } from '../carousel/carouselParams'
import CarouselItem from '../carouselItem/CarouseItem'

interface IMovieListProps {
	movieList: IMoviesData[]
}

const CarouselList: FC<IMovieListProps> = ({ movieList = [] }) => {
	return (
		<Slider {...settings}>
			{movieList?.map(movie => (
				<CarouselItem key={movie.id} movie={movie} />
			))}
		</Slider>
	)
}

export default CarouselList
