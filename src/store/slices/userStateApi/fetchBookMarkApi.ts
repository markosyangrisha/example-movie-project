import { IMoviesData } from '../../../server/moviesTypes'
import { IUserData } from '../../../server/userTypes'
import { userStateInvalidatesTags } from './userStateParams'
import { usersApi } from './usersStateApi'

interface IBookMarkPostParams {
	id: string
	body: IUserData
}

export const fetchBookMarksApi = usersApi.injectEndpoints({
	endpoints: build => ({
		postBookMarkMovies: build.mutation<IMoviesData, IBookMarkPostParams>({
			query: ({ id, body }: IBookMarkPostParams) => ({
				url: `register/5${id}`,
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body,
			}),
			invalidatesTags: userStateInvalidatesTags,
		}),
		removeBookMarkMovies: build.mutation<IMoviesData, IBookMarkPostParams>({
			query: ({ id, body }: IBookMarkPostParams) => ({
				url: `register/${id}`,
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body,
			}),
			invalidatesTags: userStateInvalidatesTags,
		}),
	}),
})

export const {
	usePostBookMarkMoviesMutation,
	useRemoveBookMarkMoviesMutation,
} = fetchBookMarksApi
