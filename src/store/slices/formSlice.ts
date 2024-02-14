import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IFormState {
	isOpenForm: boolean
	signIn: string
	signUp: string
}

const initialState: IFormState = {
	isOpenForm: false,
	signIn: 'signIn',
	signUp: 'signUp',
}

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		handlerFormStat: (state, { payload }: PayloadAction<string>) => {
			// payload ? (state.isOpenForm = true) : (state.isOpenForm = false)
			state.signIn === payload ? (state.isOpenForm = true) : null
			state.signUp === payload ? (state.isOpenForm = true) : null
		},
		closeOpenForm: state => {
			state.isOpenForm = false
		},
	},
})

export const formReducer = formSlice.reducer
export const formActions = formSlice.actions
