import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMoviesServerResponse } from '../../../server/moviesTypes'
import { URL_DISCOVER } from '../../../server/params'
import { Authorization, BASE_URL } from '../../../server/server'

interface IQueryParams {
	genre: string
	page: number
}

export const fetchExactlyGenresApi = createApi({
	reducerPath: 'fetchExactlyGenresApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: build => ({
		fetchExactlyGenres: build.query<IMoviesServerResponse, IQueryParams>({
			query: (params: IQueryParams) => ({
				url: URL_DISCOVER,
				params: {
					with_genres: params.genre,
					page: params.page
				},
				headers: {
					accept: 'application/json',
					Authorization,
				},
			}),
		}),
	}),
})

export const { useFetchExactlyGenresQuery } = fetchExactlyGenresApi
