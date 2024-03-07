import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IMoviesData } from '../../server/moviesTypes'
import { BASE_IMAGE_URL } from '../../server/server'
import { Icons } from '../../widgets/icons'
import './ThisGenresMoviesItem.css'

const ThisGenresMoviesItem: FC<IMoviesData> = React.memo(
	({ id, backdrop_path, title, release_date, vote_average }) => {
		const navigate = useNavigate()

		return (
			<div
				onClick={() => navigate(`/movieDetails/${id}`)}
				className='genre-movie__card'
			>
				<img
					className='genre-movie__card-img'
					src={`${BASE_IMAGE_URL}${backdrop_path}`}
					alt={title}
				/>
				<div className='genre-movie__card-info'>
					<span className='card-info__date'>{release_date}</span>
					<span className='movie__card-title'>{title}</span>
				</div>
				<Icons.Favorites className='movie__card-favorite' />
				<span className='movie__card-average'>{vote_average}</span>
			</div>
		)
	}
)

export default ThisGenresMoviesItem
