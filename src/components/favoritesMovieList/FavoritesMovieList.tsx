import { FC } from 'react'

import { IUserFavoriteMovieId } from '../../server/userTypes'
import {
	useFindMovieQuery,
	useGetExternalMovieByIdQuery,
} from '../../store/slices/moviesApi/fetchExternalId'
import './FavoritesMovieList.css'
import FavoritesMovieItem from '../favoritesMovieItem/FavoritesMovieItem';


const FavoritesMovieList: FC<IUserFavoriteMovieId> = ({ movieId }) => {
	const { data: externalMovieId } = useGetExternalMovieByIdQuery(movieId)
	const isExternalMovieId = externalMovieId ? externalMovieId.imdb_id : ''

	const { data: foundMovie } = useFindMovieQuery(isExternalMovieId, {
		skip: !isExternalMovieId,
	})

	return (
		<div className='favorite-item'>
			{foundMovie?.movie_results?.map(movie => (
				<FavoritesMovieItem key={movie.id} {...movie}/>
			))}
		</div>
	)
}

export default FavoritesMovieList;
