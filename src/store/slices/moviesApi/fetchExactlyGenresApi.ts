import { IMoviesServerResponse } from '../../../server/moviesTypes'
import { URL_DISCOVER } from '../../../server/params'
import { Authorization } from '../../../server/server'
import { movieApi } from './moviesStateApi'

interface IQueryParams {
	genre: string
	page: number
}

const fetchExactlyGenresApi = movieApi.injectEndpoints({
	endpoints: build => ({
		fetchExactlyGenres: build.query<IMoviesServerResponse, IQueryParams>({
			query: (params: IQueryParams) => ({
				url: URL_DISCOVER,
				params: {
					with_genres: params.genre,
					page: params.page,
				},
				headers: {
					accept: 'application/json',
					Authorization,
				},
			}),
		}),
	}),
})

export const {useFetchExactlyGenresQuery} = fetchExactlyGenresApi