import { FC } from 'react'
import { useExactlyGenres } from '../../hooks/exactlyGenres'
import { useFetchGenresQuery } from '../../store/slices/genresServerAPI'
import './GenresDropdownList.css'

const GenresDropdownList: FC = () => {
	const { data } = useFetchGenresQuery()
	const { thatGenreMovies } = useExactlyGenres()

	return (
		<div className='dropdown'>
			<ul className='genres-list'>
				{data?.genres?.map(genre => (
					<li
						onClick={() => thatGenreMovies(genre.id)}
						className='genres-list__item'
						key={genre.id}
					>
						{genre.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export default GenresDropdownList
