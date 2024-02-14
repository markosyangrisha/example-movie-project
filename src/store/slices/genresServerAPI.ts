import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGenresServerResponse } from '../../server/genresTypes'
import { Authorization, BASE_URL } from '../../server/server'

export const fetchGenresApi = createApi({
	reducerPath: 'fetchGenresApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: build => ({
		fetchGenres: build.query<IGenresServerResponse, string>({
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

export const { useFetchGenresQuery } = fetchGenresApi
