import { IMoviesData } from '../../../server/moviesTypes'
import { IUserData } from '../../../server/userTypes'
import { userStateInvalidatesTags } from './userStateParams'
import { usersApi } from './usersStateApi'

interface IFavoritesPostParams {
	id: string
	body: IUserData
}

export const fetchFavoriteApi = usersApi.injectEndpoints({
	endpoints: build => ({
		postFavorite: build.mutation<IMoviesData, IFavoritesPostParams>({
			query: ({ id, body }: IFavoritesPostParams) => ({
				url: `register/${id}`,
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body,
			}),
			invalidatesTags: userStateInvalidatesTags,
		}),
		removeFavoriteMovies: build.mutation<IMoviesData, IFavoritesPostParams>({
			query: ({ id, body }: IFavoritesPostParams) => ({
				url: `register/${id}`,
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body,
			}),
			invalidatesTags: userStateInvalidatesTags,
		}),
	}),
})

export const { usePostFavoriteMutation, useRemoveFavoriteMoviesMutation } =
	fetchFavoriteApi
