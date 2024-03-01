import { RootState } from '../../store';

export const selectUserData = (state: RootState) => state.userAuth.user
export const selectIsUserAuth = (state: RootState) => state.userAuth.isUserAuth