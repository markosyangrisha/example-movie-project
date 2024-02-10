import { FC } from 'react'
import { useFetchMoviesQuery } from '../../store/fetchMovies/serverAPI'
import { URL_TOP_RATED } from '../../server/params'
import Carousel from '../carousel/Carousel'

const TopRated: FC = () => {
	const { data } = useFetchMoviesQuery(URL_TOP_RATED)

	return <Carousel items={data?.results} categoryTitle={'Top rated'}/>
}

export default TopRated
