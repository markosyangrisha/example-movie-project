import { createSlice } from '@reduxjs/toolkit';

interface IBookMarkState {
	token: string
	session: string
	user: string
}

const initialState: IBookMarkState = {
	token: '',
	session: '',
	user: ''
}

export const bookMarkSlice = createSlice({
	name: 'bookMark',
	initialState,
	reducers: {}
})

export const bookMarkReducer = bookMarkSlice.reducer
export const bookMarkActions = bookMarkSlice.actions