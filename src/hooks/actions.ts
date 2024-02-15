import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { genresListActions } from '../store/slices/genresList'
import { formActions } from '../store/slices/formSlice';
import { burgerMenuActions } from '../store/slices/burgerMenu';

const allActions = {
	...genresListActions,
	...formActions,
	...burgerMenuActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(allActions, dispatch)
}
