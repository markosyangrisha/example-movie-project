import { useNavigate } from 'react-router-dom'
import { useActions } from '../hooks/actions'
import { IGenresData } from '../server/genresTypes'
import { URL_GENRES } from '../server/params'
import { useFetchGenresQuery } from '../store/slices/genresServerAPI'

type Aggr = {
	[key: number]: string
}

export const useExactlyGenres = () => {
	const navigate = useNavigate()
	const { data } = useFetchGenresQuery(URL_GENRES)
	const { toggleList } = useActions()

	const genres = data?.genres?.reduce((aggr: Aggr, el: IGenresData) => {
		aggr[el.id] = el.name
		return aggr
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
