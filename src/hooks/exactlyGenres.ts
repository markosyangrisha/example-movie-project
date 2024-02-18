import { useNavigate } from 'react-router-dom'
import { useActions } from '../hooks/actions'
import { IGenresData } from '../server/genresTypes'
import { useFetchGenresQuery } from '../store/slices/genresServerAPI'

type Result = {
	[key: number]: string
}

export const useExactlyGenres = () => {
	const navigate = useNavigate()
	const { data } = useFetchGenresQuery()
	const { toggleList } = useActions()

	const genres = data?.genres?.reduce((result: Result, el: IGenresData) => {
		result[el.id] = el.name
		return result
	}, {})

	const thatGenreMovies = (id: number) => {
		const changeToString = id.toString()
		navigate(`/thisGenreMovies/${changeToString}`, { state: genres })
		toggleList(false)
	}

	return {
		genres,
		thatGenreMovies,
	}
}
