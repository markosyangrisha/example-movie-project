import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMoviesServerResponse } from '../../../server/moviesTypes'
import { Authorization, BASE_URL } from '../../../server/server'

interface IQueryParams {
	url: string
	language?: string
	region?: string
}

export const movieApi = createApi({
	reducerPath: 'movie/Api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	tagTypes: ['Users'],
	endpoints: build => ({
		fetchMovies: build.query<IMoviesServerResponse, IQueryParams>({
			query: params => ({
				url: params.url,
				params: {
					language: params.language,
					region: params.region,
				},
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization,
				},
			}),
		}),
	}),
})

export const { useFetchMoviesQuery } = movieApi
