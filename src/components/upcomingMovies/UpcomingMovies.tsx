import { FC } from 'react'
import { URL_UPCOMING } from '../../server/params'
import { useFetchMoviesQuery } from '../../store/slices/moviesServerAPI'
import Carousel from '../carousel/Carousel'

import './UpcomingMovies.css'

const UpcomingMovies: FC = () => {
	const { data, isError, isLoading } = useFetchMoviesQuery({
		url: URL_UPCOMING,
		language: 'en',
		region: 'ru',
	})

	return (
		<>
			{isError && <p>Error</p>}
			{isLoading && <p>Loading...</p>}
			<Carousel items={data?.results ?? []} categoryTitle={'Upcoming movies'} />
		</>
	)
}

export default UpcomingMovies
