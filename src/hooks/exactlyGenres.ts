import { useNavigate } from 'react-router-dom'
import { IGenresData } from '../server/genresTypes'
import { URL_GENRES } from '../server/params'
import { useFetchGenresQuery } from '../store/slices/fetchGenres/genresServerAPI'
import { toggleList } from '../store/slices/genresList/genresList'
import { useAppDispatch } from './redux'

type Aggr = {
	[key: number]: string
}

export const useExactlyGenres = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { data } = useFetchGenresQuery(URL_GENRES)

	const genre = data?.genres?.reduce((aggr: Aggr, el: IGenresData) => {
		aggr[el.id] = el.name
		return aggr
	}, {})

	return (id: number) => {
		const changeToString = id.toString()
		navigate(`/thisGenreMovies/${changeToString}`, { state: genre })
		dispatch(toggleList(false))
	}
}
