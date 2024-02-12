import NotFoundPage from '../../pages/notFoundPage/NotFoundPage'
import SearchMoviesPage from '../../pages/searchMoviesPage/SearchMoviesPage';
import ThisGenreMovies from '../../pages/thisGenreMovies/ThisGenreMovies'

export const routePath = [
	{
		path: '*',
		component: NotFoundPage,
	},
	{
		path: 'thisGenreMovies/:id',
		component: ThisGenreMovies,
	},
	{
		path: 'thisGenreMovies/:id',
		component: SearchMoviesPage,
	},

]
