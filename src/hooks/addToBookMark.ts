import { useState } from 'react';
import { IUserData } from '../server/userTypes';
import {
	usePostBookMarkMoviesMutation,
	useRemoveBookMarkMoviesMutation,
} from '../store/slices/userStateApi/fetchBookMarkApi';
import { useLazyGetUserDataRegisterByIdQuery } from '../store/slices/userStateApi/usersStateApi';
import { useAppSelector } from './redux';

export const useAddToBookMark = () => {
	const { user } = useAppSelector(state => state.userAuth)
	const [addTooBookMark] = usePostBookMarkMoviesMutation()
	const [removeInBookMark] = useRemoveBookMarkMoviesMutation()
	const [getUserById] = useLazyGetUserDataRegisterByIdQuery()


	const [isAddBookMark, setIsAddBookMark] = useState<boolean>(false)

	const addToBookMarkList = async (id: number) => {
		if (user === null) return

		try {
			const { isSuccess, data } = await getUserById(user.id)

			if (!isSuccess) throw new Error('No user with this ID found')

			const existingBookmarkId = data?.bookmark.find(
				item => item.movieId === id
			)

			setIsAddBookMark(existingBookmarkId?.isAddBookMark ?? false)

			if (existingBookmarkId) {
				if (!isAddBookMark) {
					const newBookMark = data?.bookmark.filter(
						movie => movie.movieId !== id
					)

					const removeBookMark: IUserData = { ...data, bookmark: newBookMark }
					await removeInBookMark({
						id: user.id,
						body: removeBookMark,
					})
					return
				}
			}

			const newBookMark: IUserData = {
				...data,
				bookmark: [
					...(data?.bookmark ?? []),
					{ movieId: id, isAddBookMark: true },
				],
			}
			await addTooBookMark({
				id: user.id,
				body: newBookMark,
			})
		} catch (error) {
			console.log(error)
		}
	}
	return {
		addToBookMarkList,
		isAddBookMark,
	}
}