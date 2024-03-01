import {FC} from 'react';
import { IMoviesData } from '../../server/moviesTypes';

const FavoritesMovieItem:FC<IMoviesData> = ({original_title}) => {
	return (
		<div>
			<h2>{original_title}</h2>
		</div>
	);
}

export default FavoritesMovieItem;
