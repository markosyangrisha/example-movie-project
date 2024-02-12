import { FC } from 'react'
import { URL_TOP_RATED } from '../../server/params'
import { useFetchMoviesQuery } from '../../store/slices/fetchMovies/moviesServerAPI'
import Carousel from '../carousel/Carousel'

const TopRated: FC = () => {
	const { isError, isLoading, data } = useFetchMoviesQuery({url:URL_TOP_RATED})

	return (
		<>
			{isError && <p>Error</p>}
			{isLoading && <p>Loading</p>}
			<Carousel items={data?.results} categoryTitle={'Top rated'} />
		</>
	)
}

export default TopRated
