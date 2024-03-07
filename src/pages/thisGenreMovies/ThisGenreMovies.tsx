import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pagination from '../../components/pagination/Pagination'

import ThisGenresMoviesItem from '../../components/thisGenresMoviesItem/ThisGenresMoviesItem'
import { useFetchExactlyGenresQuery } from '../../store/slices/genresList/fetchExactlyGenresApi'
import './ThisGenreMovies.css'

const ITEMS_PAR_PAGE = 1

const ThisGenreMovies: FC = () => {
	const { id } = useParams<string>()
	const [page, setPage] = useState<number>(1)

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
				<ThisGenresMoviesItem key={movie.id} {...movie} />
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
