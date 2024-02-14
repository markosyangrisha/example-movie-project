import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMoviesServerResponse } from '../../server/moviesTypes'
import { URL_SEARCH } from '../../server/params'
import { Authorization, BASE_URL } from '../../server/server'

export const searchMoviesApi = createApi({
	reducerPath: 'searchMoviesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
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

export const { useSearchMoviesQuery } = searchMoviesApi
