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
			console.log(payload)
			state.isOpenGenresList = payload
		},
	},
})

export const genresListReducer = genresListSlice.reducer
export const { toggleList } = genresListSlice.actions
