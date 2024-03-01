import { IUserData } from '../server/userTypes'
import {
	usePostFavoriteMutation,
	useRemoveFavoriteMoviesMutation,
} from '../store/slices/userStateSlice/fetchFavoritesApi'
import { selectUserData } from '../store/slices/userStateSlice/userStateSelector';
import { useLazyGetUserDataRegisterByIdQuery } from '../store/slices/userStateSlice/usersStateApi'
import { useAppSelector } from './redux'

export const useAddToFavorites = () => {
	const user = useAppSelector(selectUserData)
	const [addTooFavorites] = usePostFavoriteMutation()
	const [removeInFavorites] = useRemoveFavoriteMoviesMutation()
	const [getUserById] = useLazyGetUserDataRegisterByIdQuery()

	const addToFavoritesList = async (id: number) => {
		if (user === null) return

		try {
			const { isSuccess, data } = await getUserById(user.id)

			if (!isSuccess) throw new Error('No user with this ID found')

			const existingFavoritesId = data?.favorites.find(
				item => item.movieId === id
			)

			if (existingFavoritesId) {
				const newFavorites = data?.favorites.filter(
					movie => movie.movieId !== id
				)

				const removeFavorites: IUserData = { ...data, favorites: newFavorites }

				const response = await removeInFavorites({
					id: user.id,
					body: removeFavorites,
				})

				if ('error' in response && 'status' in response.error)
					throw new Error('Error: an error occurred when deleting a bookmark')

				return
			}

			const newFavorites: IUserData = {
				...data,
				favorites: [
					...(data?.favorites ?? []),
					{ movieId: id, isAddToFavorites: true },
				],
			}
			const response = await addTooFavorites({
				id: user.id,
				body: newFavorites,
			})

			if ('error' in response && 'status' in response.error)
				throw new Error('Error: an error occurred while adding to the bookmark')
		} catch (error) {
			console.log(error)
		}
	}
	return {
		addToFavoritesList,
	}
}
