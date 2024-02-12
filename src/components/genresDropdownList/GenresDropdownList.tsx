import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { URL_GENRES } from '../../server/params'
import { useFetchGenresQuery } from '../../store/slices/fetchGenres/genresServerAPI'
import './GenresDropdownList.css'

type TypesGenresDropdownProps = {
	setBurger: (BurgerState: boolean) => void
}

const GenresDropdownList: FC<TypesGenresDropdownProps> = ({ setBurger }) => {
	const { data } = useFetchGenresQuery(URL_GENRES)
	const navigate = useNavigate()

	const genre = data?.genres.reduce((aggr, el) => {
		aggr[el.id] = el.name
		return aggr
	}, {})

	const getGenreId = (id: number) => {
		const changeToString = id.toString()
		navigate(`/thisGenreMovies/${changeToString}`, { state: genre })
		setBurger(false)
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
