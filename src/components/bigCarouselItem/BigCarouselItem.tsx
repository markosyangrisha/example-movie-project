import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IMoviesData } from '../../server/moviesTypes'
import { BASE_IMAGE_URL } from '../../server/server'
import './BigCarouselItem.css'

const BigCarouselItem: FC<IMoviesData> = ({
	id,
	original_language,
	backdrop_path,
	title,
	vote_average,
}) => {
	const navigate = useNavigate()

	return (
		<div
			onClick={() => navigate(`/movieDetails/${id}`)}
			key={id}
			className='big-carousel__item'
		>
			<img src={`${BASE_IMAGE_URL}${backdrop_path}`} alt={title} />
			<div className='big-carousel__item-info'>
				<span className='big-carousel__item-info-title'>{title}</span>
				<span className='big-carousel__item-info-vote'>
					Vote average: {vote_average}
				</span>
				<span className='big-carousel__item-info-language'>
					{original_language}
				</span>
			</div>
		</div>
	)
}

export default BigCarouselItem
