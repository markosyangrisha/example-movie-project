import { IMovieDetailsServer } from '../../../server/movieDetailsTypes'
import { URL_MOVIE_DETAILS } from '../../../server/params'
import { Authorization } from '../../../server/server'
import { movieApi } from './moviesStateApi'

const fetchMoviesDetails = movieApi.injectEndpoints({
	endpoints: build => ({
		fetchMovieDetails: build.query<IMovieDetailsServer, string>({
			query: (id: string) => ({
				url: `${URL_MOVIE_DETAILS}${id}`,
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization,
				},
			}),
		}),
	}),
})

export const {useFetchMovieDetailsQuery} = fetchMoviesDetails