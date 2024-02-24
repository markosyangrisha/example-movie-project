import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IBurgerMenu {
	isOpenBurgerMenu: boolean
	isOpenDropdownList: boolean
}

const initialState: IBurgerMenu = {
	isOpenBurgerMenu: false,
	isOpenDropdownList: false,
}

export const burgerMenu = createSlice({
	name: 'burgerMenu',
	initialState,
	reducers: {
		openBurgerMenuHandler: (state, {payload}: PayloadAction<boolean>) => {
			state.isOpenBurgerMenu = payload
		},
		openDropdownList: (state) => {
			state.isOpenDropdownList = !state.isOpenDropdownList
		}
	},
})

export const burgerMenuReducer = burgerMenu.reducer
export const burgerMenuActions = burgerMenu.actions