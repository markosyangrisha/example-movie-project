import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Authorization, BASE_URL } from '../../server/server'
import { IPopularMoviesServer } from './types'

export const fetchMoviesApi = createApi({
	reducerPath: 'popularMovieApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: build => ({
		fetchMovies: build.query<IPopularMoviesServer, string>({
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
