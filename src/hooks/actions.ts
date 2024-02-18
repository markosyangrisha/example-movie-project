import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { genresListActions } from '../store/slices/genresList'
import { formActions } from '../store/slices/formSlice';
import { burgerMenuActions } from '../store/slices/burgerMenu';
import { userAuthActions } from '../store/slices/userAuth';

const allActions = {
	...genresListActions,
	...formActions,
	...burgerMenuActions,
	...userAuthActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(allActions, dispatch)
}
