import NotFoundPage from '../../pages/notFoundPage/NotFoundPage'
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
]
