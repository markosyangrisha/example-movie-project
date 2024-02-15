import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { fetchExactlyGenresApi } from './slices/fetchExactlyGenres'
import { fetchMovieDetails } from './slices/fetchMovieDetails'
import { genresListReducer } from './slices/genresList'
import { fetchGenresApi } from './slices/genresServerAPI'
import { fetchMoviesApi } from './slices/moviesServerAPI'
import { searchMoviesApi } from './slices/searchServerAPI'
import { formReducer } from './slices/formSlice';
import { burgerMenuReducer } from './slices/burgerMenu';

const rootRouters = combineReducers({
	[fetchMoviesApi.reducerPath]: fetchMoviesApi.reducer,
	[fetchGenresApi.reducerPath]: fetchGenresApi.reducer,
	[searchMoviesApi.reducerPath]: searchMoviesApi.reducer,
	[fetchExactlyGenresApi.reducerPath]: fetchExactlyGenresApi.reducer,
	[fetchMovieDetails.reducerPath]: fetchMovieDetails.reducer,
	genresList: genresListReducer,
	form: formReducer,
	burgerMenu: burgerMenuReducer
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
				fetchMovieDetails.middleware
			),
	})
}

export type RootState = ReturnType<typeof rootRouters>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
