import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMoviesData } from '../../server/moviesTypes';
import { BASE_IMAGE_URL } from '../../server/server';
import { Icons } from '../../widgets/icons';
import './FavoritesMovieItem.css';

const FavoritesMovieItem: FC<IMoviesData> = ({ id, backdrop_path, title, release_date, vote_average }) => {
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(`/movieDetails/${id}`)} className='favorite-movie__card'>
			<img className='favorite-movie__card-img' src={`${BASE_IMAGE_URL}${backdrop_path}`} alt={title} />
			<div className='favorite-movie__card-info'>
				<span className='favorite-card-info__date'>{release_date}</span>
				<span className='favorite-movie__card-title'>{title}</span>
			</div>
			<Icons.Favorites className='favorite-movie__card-favorite' />
			<span className='favorite-movie__card-average'>{vote_average}</span>
		</div>
	);
};

export default FavoritesMovieItem;
