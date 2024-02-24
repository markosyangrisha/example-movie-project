import { IGenresServerResponse } from '../../../server/genresTypes'
import { URL_GENRES } from '../../../server/params'
import { Authorization } from '../../../server/server'
import { movieApi } from './moviesStateApi'

const fetchGenesApi = movieApi.injectEndpoints({
	endpoints: build => ({
		fetchGenres: build.query<IGenresServerResponse, void>({
			query: () => ({
				url: URL_GENRES,
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization,
				},
			}),
		}),
	}),
})

export const { useFetchGenresQuery } = fetchGenesApi
