import { FC } from 'react'
import { useAppSelector } from '../../hooks/redux'
import { useGetFavoriteMoviesQuery } from '../../store/slices/userStateSlice/fetchFavoritesApi'
import { selectUserData } from '../../store/slices/userStateSlice/userStateSelector'
import './Favorites.css'
import FavoritesMovieItem from '../favoritesMovieList/FavoritesMovieList'

const Favorites: FC = () => {
	const user = useAppSelector(selectUserData)
	const isAuthUserId = user !== null ? user.id : ''

	const { data } = useGetFavoriteMoviesQuery(isAuthUserId, {
		skip: !isAuthUserId,
	})

	return (
		<div className='favorites'>
			{data?.favorites?.map(movie => (
				<FavoritesMovieItem
					key={movie.movieId}
					isAddToFavorites={movie.isAddToFavorites}
					movieId={movie.movieId}
				/>
			))}
		</div>
	)
}

export default Favorites
