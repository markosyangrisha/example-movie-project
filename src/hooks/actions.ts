import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { genresListActions } from '../store/slices/genresList'
import { formActions } from '../store/slices/formSlice';

const allActions = {
	...genresListActions,
	...formActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(allActions, dispatch)
}
