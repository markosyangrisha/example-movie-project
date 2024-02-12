import { FC } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useFetchExactlyGenresQuery } from '../../store/slices/fetchExactlyGenres/fetchExactlyGenres'
import './ThisGenreMovies.css'

const ThisGenreMovies: FC = () => {
	const { id } = useParams<string>()
	const { state } = useLocation()

	const { data } = useFetchExactlyGenresQuery(id || '28')

	return (
		<div>
			{data?.results.map(movie => (
				<div key={movie.id}>
					{/* <span>{movie.genre_ids.map(el => state[el])}</span> */}
				</div>
			))}
		</div>
	)
}

export default ThisGenreMovies
