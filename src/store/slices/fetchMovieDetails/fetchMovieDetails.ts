import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMovieDetailsServer } from '../../../server/movieDetailsTypes'
import { URL_MOVIE_DETAILS } from '../../../server/params'
import { BASE_URL } from '../../../server/server'
import { Authorization } from './../../../server/server'

export const fetchMovieDetails = createApi({
	reducerPath: 'fetchMovieDetailsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
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

export const { useFetchMovieDetailsQuery } = fetchMovieDetails
