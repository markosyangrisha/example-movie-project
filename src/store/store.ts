import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { fetchExactlyGenresApi } from './slices/fetchExactlyGenres/fetchExactlyGenres'
import { fetchGenresApi } from './slices/fetchGenres/genresServerAPI'
import { fetchMovieDetails } from './slices/fetchMovieDetails/fetchMovieDetails'
import { fetchMoviesApi } from './slices/fetchMovies/moviesServerAPI'
import { genresListReducer } from './slices/genresList/genresList'
import { searchMoviesApi } from './slices/searchSlice/searchServerAPI'

const rootRouters = combineReducers({
	[fetchMoviesApi.reducerPath]: fetchMoviesApi.reducer,
	[fetchGenresApi.reducerPath]: fetchGenresApi.reducer,
	[searchMoviesApi.reducerPath]: searchMoviesApi.reducer,
	[fetchExactlyGenresApi.reducerPath]: fetchExactlyGenresApi.reducer,
	genresList: genresListReducer,
	[fetchMovieDetails.reducerPath]: fetchMovieDetails.reducer,
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
