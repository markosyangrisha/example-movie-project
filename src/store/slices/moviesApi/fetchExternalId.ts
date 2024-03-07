import { IMoviesData } from '../../../server/moviesTypes'
import { URL_MOVIE_FIND_BY_ID } from './../../../server/params'
import { Authorization } from './../../../server/server'
import { movieApi } from './moviesStateApi'
// import { userStateProvideTags } from '../userStateSlice/userStateParams';

export interface IExternalIdParams {
	id: number
	imdb_id: string
}

interface IFindMovieResult {
	movie_results: IMoviesData[]
}

const externalId = movieApi.injectEndpoints({
	endpoints: build => ({
		getExternalMovieById: build.query<IExternalIdParams, number>({
			query: (movieId: number) => ({
				url: `movie/${movieId}/external_ids`,
				headers: { Authorization },
			}),
		}),
		findMovie: build.query<IFindMovieResult, string>({
			query: (movieId: string) => ({
				url: `${URL_MOVIE_FIND_BY_ID}${movieId}`,
				params: {
					external_source: 'imdb_id',
				},
				headers: { Authorization },
			}),
		}),
	}),
})

export const {
	useLazyGetExternalMovieByIdQuery,
	useGetExternalMovieByIdQuery,
	useLazyFindMovieQuery,
} = externalId
