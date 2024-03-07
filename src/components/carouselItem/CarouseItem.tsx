import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddToFavorites } from '../../hooks/addToFavorites';
import { IMoviesData } from '../../server/moviesTypes';
import { BASE_IMAGE_URL } from '../../server/server';
import { Icons } from '../../widgets/icons';
import './CarouselItem.css';

interface ICarouselItemProps {
	movie: IMoviesData;
}

const CarouselItem: FC<ICarouselItemProps> = ({ movie }) => {
	const navigate = useNavigate();
	const { addToFavoritesList } = useAddToFavorites();

	return (
		<div className='carousel-item'>
			<img className='carousel-item__img' src={`${BASE_IMAGE_URL}${movie.backdrop_path}`} alt={movie.title} />
			<div onClick={() => navigate(`movieDetails/${movie.id}`)} className='carousel-movies__item-info'>
				<span className='carousel-movies__item-info__title'>{movie.title}</span>
				<button>Watch Now</button>
				<p className='carousel-movies__item-info__vote'>
					Vote average <span>{movie.vote_average}</span>
				</p>
			</div>
			<Icons.Favorites onClick={() => addToFavoritesList(movie)} className='carousel-movies__item-info__favorite' />
		</div>
	);
};

export default CarouselItem;
