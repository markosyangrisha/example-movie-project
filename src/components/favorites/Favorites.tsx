import { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useGetFavoriteMoviesQuery } from '../../store/slices/userStateSlice/fetchFavoritesApi';
import { selectUserData } from '../../store/slices/userStateSlice/userStateSelector';
import FavoritesMovieList from '../favoritesMovieList/FavoritesMovieList';

const Favorites: FC = () => {
	const user = useAppSelector(selectUserData);
	const isAuthUserId = user !== null ? user.id : '';

	const { data: favoritesMoviesList } = useGetFavoriteMoviesQuery(isAuthUserId, {
		skip: !isAuthUserId,
	});

	return <FavoritesMovieList favoritesMoviesList={favoritesMoviesList?.favorites ?? []} />;
};

export default Favorites;
