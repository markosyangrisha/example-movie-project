import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { burgerMenuActions } from '../store/slices/burgerMenuSlice/burgerMenu'
import { formActions } from '../store/slices/formSlice/formSlice'
import { genresListActions } from '../store/slices/moviesApi/genresList'
import { userAuthActions } from '../store/slices/userStateApi/userAuth'

const allActions = {
	...genresListActions,
	...formActions,
	...burgerMenuActions,
	...userAuthActions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(allActions, dispatch)
}
