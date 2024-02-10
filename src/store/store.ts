import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { movieReducer } from './fetchMovies'
import { fetchMoviesApi } from './fetchMovies/serverAPI'

const rootRouters = combineReducers({
	movie: movieReducer,
	[fetchMoviesApi.reducerPath]: fetchMoviesApi.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootRouters,

		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(fetchMoviesApi.middleware),
	})
}

export type RootState = ReturnType<typeof rootRouters>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
