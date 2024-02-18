import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserSession, IUserToken } from '../../server/formTypes'

interface IUserAuth {
	isUserAuth: boolean
}

interface IUserParams {
	token: IUserToken | undefined
	session: IUserSession | undefined
}

const initialState: IUserAuth = {
	isUserAuth: JSON.parse(localStorage.getItem('auth') ?? 'false'),
}

const userAuthSlice = createSlice({
	name: 'userAuth',
	initialState,
	reducers: {
		authUser: (state, { payload }: PayloadAction<IUserParams>) => {
			localStorage.setItem('token', JSON.stringify(payload.token))
			localStorage.setItem('auth', JSON.stringify((state.isUserAuth = true)))
			sessionStorage.setItem('session', JSON.stringify(payload.session))
		},
		logoutUser: state => {
			localStorage.removeItem('token')
			localStorage.removeItem('auth')
			sessionStorage.removeItem('session')
			state.isUserAuth = false
		},
	},
})

export const userAuthReducer = userAuthSlice.reducer
export const userAuthActions = userAuthSlice.actions
