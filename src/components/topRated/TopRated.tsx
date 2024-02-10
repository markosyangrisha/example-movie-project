import { FC } from 'react'
import { URL_TOP_RATED } from '../../server/params'
import { useFetchMoviesQuery } from '../../store/fetchMovies/moviesServerAPI'
import Carousel from '../carousel/Carousel'

const TopRated: FC = () => {
	const { data } = useFetchMoviesQuery(URL_TOP_RATED)

	return <Carousel items={data?.results} categoryTitle={'Top rated'} />
}

export default TopRated
