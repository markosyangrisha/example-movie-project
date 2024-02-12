import { FC } from 'react'
import { URL_POPULAR } from '../../server/params'
import { useFetchMoviesQuery } from '../../store/slices/fetchMovies/moviesServerAPI'
import Carousel from '../carousel/Carousel'

const PopularMovies: FC = () => {
	const { data, isError, isLoading } = useFetchMoviesQuery({ url: URL_POPULAR })

	return (
		<>
			{isError && <p>Error</p>}
			{isLoading && <p>Loading...</p>}
			<Carousel items={data?.results} categoryTitle={'Popular movies'} />
		</>
	)
}

export default PopularMovies
