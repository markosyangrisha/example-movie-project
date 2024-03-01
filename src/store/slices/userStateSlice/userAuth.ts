import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserData } from '../../../server/userTypes'

type IUserParams = Omit<IUserData, 'username' | 'confirmPassword' | 'bookmark'>

interface IUserAuth {
	isUserAuth: boolean
	user: IUserParams | null
}

const initialState: IUserAuth = {
	isUserAuth: JSON.parse(localStorage.getItem('auth') ?? 'null'),
	user: JSON.parse(localStorage.getItem('user') ?? 'null'),
}

const userAuthSlice = createSlice({
	name: 'userAuth',
	initialState,
	reducers: {
		authUser: (state, { payload }: PayloadAction<IUserParams>) => {
			localStorage.setItem('user', JSON.stringify((state.user = payload)))
			localStorage.setItem('auth', JSON.stringify((state.isUserAuth = true)))
		},
		logoutUser: state => {
			localStorage.removeItem('auth')
			localStorage.removeItem('user')
			state.isUserAuth = false
			state.user = null
		},
	},
})

export const userAuthReducer = userAuthSlice.reducer
export const userAuthActions = userAuthSlice.actions
