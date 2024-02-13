import { FC } from 'react'
import { useFetchMoviesQuery } from '../../store/slices/fetchMovies/moviesServerAPI'
import { URL_UPCOMING } from '../../server/params'
import Carousel from '../carousel/Carousel'

import './UpcomingMovies.css'


const UpcomingMovies: FC = () => {

	const { data, isError, isLoading } = useFetchMoviesQuery({
		url: URL_UPCOMING,
		language: 'en',
		region: 'ru',
	})

	console.log(data)

	return (
		<>
			{isError && <p>Error</p>}
			{isLoading && <p>Loading...</p>}
			<Carousel items={data?.results ?? []} categoryTitle={'Upcoming movies'} />
		</>
	)
}

export default UpcomingMovies


