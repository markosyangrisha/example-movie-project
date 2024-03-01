import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { burgerMenuReducer } from './slices/burgerMenuSlice/burgerMenu'
import { formReducer } from './slices/formSlice/formSlice'
import { genresListReducer } from './slices/genresList/genresList'
import { movieApi } from './slices/moviesApi/moviesStateApi'
import { userAuthReducer } from './slices/userStateSlice/userAuth'
import { usersApi } from './slices/userStateSlice/usersStateApi'

const rootRouters = combineReducers({
	[movieApi.reducerPath]: movieApi.reducer,
	[usersApi.reducerPath]: usersApi.reducer,
	genresList: genresListReducer,
	formAuth: formReducer,
	burgerMenu: burgerMenuReducer,
	userAuth: userAuthReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootRouters,

		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(movieApi.middleware, usersApi.middleware),
	})
}

export type RootState = ReturnType<typeof rootRouters>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
