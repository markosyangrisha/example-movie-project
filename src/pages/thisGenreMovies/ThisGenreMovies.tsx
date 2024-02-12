import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pagination from '../../components/pagination/Pagination'
import { BASE_IMAGE_URL } from '../../server/server'
import { useFetchExactlyGenresQuery } from '../../store/slices/fetchExactlyGenres/fetchExactlyGenres'
import { Icons } from '../../widgets/icons'
import './ThisGenreMovies.css'

const ITEMS_PAR_PAGE = 1

const ThisGenreMovies: FC = () => {
	const { id } = useParams<string>()
	const [page, setPage] = useState<number>(1)

	const { data } = useFetchExactlyGenresQuery({
		genre: id || '',
		page,
	})

	const changePageHandler = ({ selected }: { selected: number }) => {
		setPage(selected + 1)
	}

	const pageCount = Math.ceil((data?.total_pages || 0) / ITEMS_PAR_PAGE)

	return (
		<div className='genre-movie__block'>
			{data?.results.map(movie => (
				<div key={movie.id} className='genre-movie__card'>
					<img
						className='genre-movie__card-img'
						src={`${BASE_IMAGE_URL}${movie.backdrop_path}`}
						alt={movie.title}
					/>
					<div className='genre-movie__card-info'>
						<span className='card-info__date'>{movie.release_date}</span>
						<span className='movie__card-title'>{movie.title}</span>
					</div>
					<Icons.Favorite className='movie__card-favorite' />
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
