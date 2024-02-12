import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { fetchExactlyGenresApi } from './slices/fetchExactlyGenres/fetchExactlyGenres'
import { fetchGenresApi } from './slices/fetchGenres/genresServerAPI'
import { fetchMoviesApi } from './slices/fetchMovies/moviesServerAPI'
import { searchMoviesApi } from './slices/searchSlice/searchServerAPI'
import { genresListReducer } from './slices/genresList/genresList';

const rootRouters = combineReducers({
	[fetchMoviesApi.reducerPath]: fetchMoviesApi.reducer,
	[fetchGenresApi.reducerPath]: fetchGenresApi.reducer,
	[searchMoviesApi.reducerPath]: searchMoviesApi.reducer,
	[fetchExactlyGenresApi.reducerPath]: fetchExactlyGenresApi.reducer,
	genresList: genresListReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootRouters,

		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(
				fetchMoviesApi.middleware,
				fetchGenresApi.middleware,
				searchMoviesApi.middleware,
				fetchExactlyGenresApi.middleware
			),
	})
}

export type RootState = ReturnType<typeof rootRouters>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']