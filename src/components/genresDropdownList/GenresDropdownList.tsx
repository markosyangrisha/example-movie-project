import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { URL_GENRES } from '../../server/params'
import { toggleList } from '../../store/slices/genresList/genresList'
import { useFetchGenresQuery } from '../../store/slices/fetchGenres/genresServerAPI'
import { useAppDispatch } from '../../hooks/redux'
import './GenresDropdownList.css'

const GenresDropdownList: FC = () => {
	const { data } = useFetchGenresQuery(URL_GENRES)
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const genre = data?.genres.reduce((aggr, el) => {
		aggr[el.id] = el.name
		return aggr
	}, {})

	const getGenreId = (id: number) => {
		const changeToString = id.toString()
		navigate(`/thisGenreMovies/${changeToString}`, { state: genre })
		dispatch(toggleList(false))
	}

	return (
		<div className='dropdown'>
			<ul className='genres-list'>
				{data?.genres?.map(genre => (
					<li
						onClick={() => getGenreId(genre.id)}
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
