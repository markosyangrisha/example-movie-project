import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BASE_IMAGE_URL } from '../../server/server'
import { useSearchMoviesQuery } from '../../store/slices/searchSlice/searchServerAPI'
import { Icons } from '../../widgets/icons'
import './SearchMoviesPage.css'

const SearchMoviesPage: FC = () => {
	const { state } = useLocation()
	const navigate = useNavigate()

	const { isError, isLoading, data } = useSearchMoviesQuery(state)
	return (
		<div className='search-movies__block'>
			{isError && <p>Error</p>}
			{isLoading && <p>Loading</p>}

			{data?.results.length === 0 ? (
				<p>Not found movies</p>
			) : (
				data?.results.map(movie => (
					<div
						onClick={() => navigate(`/movieDetails/${movie.id}`)}
						key={movie.id}
						className='search-movie__card'
					>
						<img
							className='search-movie__card-img'
							src={`${BASE_IMAGE_URL}${movie.backdrop_path}`}
							alt={movie.title}
						/>
						<div className='search-movie__card-info'>
							<span className='search-card-info__date'>
								{movie.release_date}
							</span>
							<span className='search-movie__card-title'>{movie.title}</span>
						</div>
						<Icons.BookMark className='search-movie__card-favorite' />
						<span className='search-movie__card-average'>
							{movie.vote_average}
						</span>
					</div>
				))
			)}
		</div>
	)
}

export default SearchMoviesPage
