import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { burgerMenuReducer } from './slices/burgerMenu'
import { fetchExactlyGenresApi } from './slices/fetchExactlyGenresApi'
import { fetchMovieDetails } from './slices/fetchMovieDetailsApi'
import { formReducer } from './slices/formSlice'
import { genresListReducer } from './slices/genresList'
import { fetchGenresApi } from './slices/genresServerAPI'
import { fetchMoviesApi } from './slices/moviesServerAPI'
import { searchMoviesApi } from './slices/searchServerAPI'
import { formStateApi } from './slices/formApi';
import { userStateApi } from './slices/usersStateApi';
import { userAuthReducer } from './slices/userAuth';

const rootRouters = combineReducers({
	[fetchMoviesApi.reducerPath]: fetchMoviesApi.reducer,
	[fetchGenresApi.reducerPath]: fetchGenresApi.reducer,
	[searchMoviesApi.reducerPath]: searchMoviesApi.reducer,
	[fetchExactlyGenresApi.reducerPath]: fetchExactlyGenresApi.reducer,
	[fetchMovieDetails.reducerPath]: fetchMovieDetails.reducer,
	[formStateApi.reducerPath]: formStateApi.reducer,
	[userStateApi.reducerPath] : userStateApi.reducer,
	genresList: genresListReducer,
	formAuth: formReducer,
	burgerMenu: burgerMenuReducer,
	userAuth: userAuthReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootRouters,

		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(
				fetchMoviesApi.middleware,
				fetchGenresApi.middleware,
				searchMoviesApi.middleware,
				fetchExactlyGenresApi.middleware,
				fetchMovieDetails.middleware,
				formStateApi.middleware,
				userStateApi.middleware
			),
	})
}

export type RootState = ReturnType<typeof rootRouters>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
