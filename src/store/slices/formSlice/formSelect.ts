import { RootState } from '../../store';

export const selectIsOpenForm = (state:RootState) => state.formAuth.isOpenForm 
export const selectIsOpenEyeConfirm = (state:RootState) => state.formAuth.isOpenEyeConfirm 
export const selectIsOpenEye = (state:RootState) => state.formAuth.isOpenEye 
export const selectSignIn = (state:RootState) => state.formAuth.signIn 
export const selectSignUp = (state:RootState) => state.formAuth.signUp 