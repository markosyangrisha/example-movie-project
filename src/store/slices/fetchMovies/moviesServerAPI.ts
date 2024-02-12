import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMoviesServerResponse } from '../../../server/moviesTypes'
import { Authorization, BASE_URL } from '../../../server/server'

export const fetchMoviesApi = createApi({
	reducerPath: 'fetchMoviesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: build => ({
		fetchMovies: build.query<IMoviesServerResponse, string>({
			query: url => ({
				url: url,
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization,
				},
			}),
		}),
	}),
})

export const { useFetchMoviesQuery } = fetchMoviesApi
