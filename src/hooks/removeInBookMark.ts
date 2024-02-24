import { useState } from 'react'
import { IUserData } from '../server/userTypes'
import { usePostBookMarkMoviesMutation } from '../store/slices/userStateApi/fetchBookMarkApi'
import { useLazyGetUserDataRegisterByIdQuery } from '../store/slices/userStateApi/usersStateApi'
import { useAppSelector } from './redux'

export const useRemoveBookMark = () => {
	const [isAddBookMark, setIsAddBookMark] = useState<boolean>(false)
	const { user } = useAppSelector(state => state.userAuth)
	const [addBookMark] = usePostBookMarkMoviesMutation()
	const [getUserById] = useLazyGetUserDataRegisterByIdQuery()

	const removeBookMarkList = async (id: number) => {
		if (user === null) return

		try {
			const { isSuccess, data } = await getUserById(user.id)

			if (!isSuccess) throw new Error('Not found user')
			const existingBookmarkId = data?.bookmark.find(
				item => item.movieId === id
			)

			setIsAddBookMark(existingBookmarkId?.isAddBookMark ?? false)

			if (existingBookmarkId) return

			const newUserBookMark: IUserData = {
				...data,
				bookmark: [
					...(data?.bookmark ?? []),
					{ movieId: id, isAddBookMark: true },
				],
			}
			await addBookMark({
				id: user.id,
				body: newUserBookMark,
			})
		} catch (error) {
			console.log(error)
		}
	}
	return {
		removeBookMarkList,
		isAddBookMark,
	}
}
