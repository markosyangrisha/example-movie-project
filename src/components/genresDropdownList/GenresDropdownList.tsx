import { FC } from 'react'
import { URL_GENRES } from '../../server/params'
import { useFetchGenresQuery } from '../../store/fetchGenres/genresServerAPI'
import { useNavigate } from 'react-router-dom'
import './GenresDropdownList.css'

type TypesGenresDropdownProps = {
	setBurger: (BurgerState: boolean) => void
}

const GenresDropdownList: FC<TypesGenresDropdownProps> = ({ setBurger }) => {
	const { data } = useFetchGenresQuery(URL_GENRES)
	const navigate = useNavigate()

	const getGenreId = (id: number) => {
		navigate(`/thisGenreMovies/${id}`)
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
