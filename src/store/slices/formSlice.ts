import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IFormState {
	isOpenForm: boolean
	signIn: boolean
	signUp: boolean
	isOpenEye: boolean
}

const initialState: IFormState = {
	isOpenForm: false,
	isOpenEye: false,
	signIn: false,
	signUp: false,
}

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		handlerFormStat: (state, { payload }: PayloadAction<string>) => {
    if (payload === 'signIn') {
			state.signIn = true
			state.isOpenForm = true
			state.signUp = false
		} else if (payload === 'signUp') {
			state.signUp = true
			state.isOpenForm = true
			state.signIn = false
		}
		},
		closeOpenForm: state => {
			state.isOpenForm = false
		},
		passwordEye: (state) => {
			state.isOpenEye = !state.isOpenEye
		},
	},
})

export const formReducer = formSlice.reducer
export const formActions = formSlice.actions
