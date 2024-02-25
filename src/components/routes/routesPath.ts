import Favorites from '../../favorites/Favorites';
import MovieDetails from '../../pages/movieDetails/MovieDetails'
import NotFoundPage from '../../pages/notFoundPage/NotFoundPage'
import SearchMoviesPage from '../../pages/searchMoviesPage/SearchMoviesPage'
import ThisGenreMovies from '../../pages/thisGenreMovies/ThisGenreMovies'

export const routePath = [
	{
		path: 'thisGenreMovies/:id',
		component: ThisGenreMovies,
	},
	{
		path: 'searchMoviesPage',
		component: SearchMoviesPage,
	},
	{
		path: 'movieDetails/:id',
		component: MovieDetails,
	},
	{
		path: 'favorites',
		component: Favorites,
	},
	{
		path: '*',
		component: NotFoundPage,
	},
]
