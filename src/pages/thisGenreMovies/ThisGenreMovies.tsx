import { FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Pagination from '../../components/pagination/Pagination'
import { BASE_IMAGE_URL } from '../../server/server'
import { useFetchExactlyGenresQuery } from '../../store/slices/fetchExactlyGenres'
import { Icons } from '../../widgets/icons'
import './ThisGenreMovies.css'

const ITEMS_PAR_PAGE = 1

const ThisGenreMovies: FC = () => {
	const { id } = useParams<string>()
	const [page, setPage] = useState<number>(1)
	const navigate = useNavigate()

	const { data, isError, isLoading } = useFetchExactlyGenresQuery({
		genre: id || '',
		page,
	})

	const changePageHandler = ({ selected }: { selected: number }) => {
		setPage(selected + 1)
	}

	const pageCount = Math.ceil((data?.total_pages || 0) / ITEMS_PAR_PAGE)

	return (
		<div className='genre-movie__block'>
			{isError && <p>Error</p>}
			{isLoading && <p>Loading...</p>}

			{data?.results.map(movie => (
				<div
					onClick={() => navigate(`/movieDetails/${movie.id}`)}
					key={movie.id}
					className='genre-movie__card'
				>
					<img
						className='genre-movie__card-img'
						src={`${BASE_IMAGE_URL}${movie.backdrop_path}`}
						alt={movie.title}
					/>
					<div className='genre-movie__card-info'>
						<span className='card-info__date'>{movie.release_date}</span>
						<span className='movie__card-title'>{movie.title}</span>
					</div>
					<Icons.BookMark className='movie__card-favorite' />
					<span className='movie__card-average'>{movie.vote_average}</span>
				</div>
			))}
			<Pagination
				current={page}
				changePageHandler={changePageHandler}
				pageCount={pageCount}
			/>
		</div>
	)
}

export default ThisGenreMovies
