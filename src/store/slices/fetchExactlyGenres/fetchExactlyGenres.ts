import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMoviesServerResponse } from '../../../server/moviesTypes'
import { URL_DISCOVER } from '../../../server/params'
import { Authorization, BASE_URL } from '../../../server/server'

export const fetchExactlyGenresApi = createApi({
	reducerPath: 'fetchExactlyGenresApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: build => ({
		fetchExactlyGenres: build.query<IMoviesServerResponse, string >({
			query: (genre: string) => ({
				url: URL_DISCOVER,
				params: {
					with_genres: genre,
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
