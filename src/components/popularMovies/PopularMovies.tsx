import { FC } from 'react'
import { URL_POPULAR } from '../../server/params'
import { useFetchMoviesQuery } from '../../store/fetchMovies/serverAPI'
import Carousel from '../carousel/Carousel'

const PopularMovies: FC = () => {
	const { data } = useFetchMoviesQuery(URL_POPULAR)

	return <Carousel items={data?.results} categoryTitle={'Popular movies'}/>
}

export default PopularMovies
