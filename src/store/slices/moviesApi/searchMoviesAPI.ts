import { IMoviesServerResponse } from '../../../server/moviesTypes'
import { URL_SEARCH } from '../../../server/params'
import { Authorization } from '../../../server/server'
import { movieApi } from './moviesStateApi'

const searchMovies = movieApi.injectEndpoints({
	endpoints: build => ({
		searchMovies: build.query<IMoviesServerResponse, string>({
			query: (search: string) => ({
				url: URL_SEARCH,
				method: 'GET',
				params: {
					query: search,
				},
				headers: {
					accept: 'application/json',
					Authorization,
				},
			}),
		}),
	}),
})

export const {useSearchMoviesQuery} = searchMovies