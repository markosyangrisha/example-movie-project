import { FC } from 'react'
import { URL_GENRES } from '../../server/params'
import { useFetchGenresQuery } from '../../store/slices/fetchGenres/genresServerAPI'
import { useExactlyGenres } from '../../hooks/exactlyGenres'
import './GenresDropdownList.css'

const GenresDropdownList: FC = () => {
	const { data } = useFetchGenresQuery(URL_GENRES)
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
