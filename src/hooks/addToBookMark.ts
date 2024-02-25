import { useState } from 'react'
import { IUserData } from '../server/userTypes'
import {
	usePostBookMarkMoviesMutation,
	useRemoveBookMarkMoviesMutation,
} from '../store/slices/userStateApi/fetchBookMarkApi'
import { useLazyGetUserDataRegisterByIdQuery } from '../store/slices/userStateApi/usersStateApi'
import { useAppSelector } from './redux'

export const useAddToBookMark = () => {
	const [isAddBookMark, setIsAddBookMark] = useState<boolean>(false)
	const { user } = useAppSelector(state => state.userAuth)
	const [addTooBookMark] = usePostBookMarkMoviesMutation()
	const [removeInBookMark] = useRemoveBookMarkMoviesMutation()
	const [getUserById] = useLazyGetUserDataRegisterByIdQuery()

	const addToBookMarkList = async (id: number) => {
		if (user === null) return

		try {
			const { isSuccess, data } = await getUserById(user.id)

			if (!isSuccess) throw new Error('No user with this ID found')

			const existingBookmarkId = data?.bookmark.find(
				item => item.movieId === id
			)

			// setIsAddBookMark(existingBookmarkId?.isAddBookMark ?? false)

			if (existingBookmarkId) {
				const newBookMark = data?.bookmark.filter(movie => movie.movieId !== id)

				const removeBookMark: IUserData = { ...data, bookmark: newBookMark }

				const response = await removeInBookMark({
					id: user.id,
					body: removeBookMark,
				})

				if ('error' in response && 'status' in response.error)
					throw new Error('Error: an error occurred when deleting a bookmark')

				return
			}

			const newBookMark: IUserData = {
				...data,
				bookmark: [
					...(data?.bookmark ?? []),
					{ movieId: id, isAddBookMark: true },
				],
			}
			const response = await addTooBookMark({ id: user.id, body: newBookMark })

			if ('error' in response && 'status' in response.error)
				throw new Error(
					'Error: an error occurred while adding to the bookmark '
				)
		} catch (error) {
			console.log(error)
		}
	}
	return {
		addToBookMarkList,
		isAddBookMark,
	}
}
