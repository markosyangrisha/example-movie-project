import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IFormState {
	isOpenForm: boolean
	isOpenEyeConfirm: boolean
	signIn: boolean
	signUp: boolean
	isOpenEye: boolean
}

const initialState: IFormState = {
	isOpenForm: false,
	isOpenEye: false,
	isOpenEyeConfirm: false,
	signIn: false,
	signUp: false,
}

const formSlice = createSlice({
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
		closeOpenForm: (state, { payload }: PayloadAction<boolean>) => {
			state.isOpenForm = payload
		},
		passwordEye: state => {
			state.isOpenEye = !state.isOpenEye
		},
		confirmPasswordEye: state => {
			state.isOpenEyeConfirm = !state.isOpenEyeConfirm
		},
	},
})

export const formReducer = formSlice.reducer
export const formActions = formSlice.actions
