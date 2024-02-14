import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type GenresListState = {
	isOpenGenresList: boolean
}

const initialState: GenresListState = {
	isOpenGenresList: false,
}

export const genresListSlice = createSlice({
	name: 'genresList',
	initialState,	
	reducers: {
		toggleList: (state, { payload }: PayloadAction<boolean>) => {
			state.isOpenGenresList = payload
		},
	},
})

export const genresListReducer = genresListSlice.reducer
export const genresListActions = genresListSlice.actions
