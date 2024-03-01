import { RootState } from '../../store'

export const selectIsOpenBurgerMenu = (state: RootState) =>
	state.burgerMenu.isOpenBurgerMenu
export const selectIsOpenDropdownList = (state: RootState) =>
	state.burgerMenu.isOpenDropdownList
