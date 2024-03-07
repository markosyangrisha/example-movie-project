import { FC } from 'react';
import { IMoviesData } from '../../server/moviesTypes';
import FavoritesMovieItem from '../favoritesMovieItem/FavoritesMovieItem';
import './FavoritesMovieList.css';

interface IFavoritesMovieListProps {
	favoritesMoviesList: IMoviesData[];
}

const FavoritesMovieList: FC<IFavoritesMovieListProps> = ({ favoritesMoviesList = [] }) => {
	return (
		<div className='favorites-movie__block'>
			{favoritesMoviesList?.map(movie => (
				<FavoritesMovieItem key={movie.id} {...movie} />
			))}
		</div>
	);
};

export default FavoritesMovieList;
