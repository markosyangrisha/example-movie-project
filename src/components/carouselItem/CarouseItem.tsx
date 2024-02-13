import { FC } from 'react'
import { BASE_IMAGE_URL } from '../../server/server'
import { Icons } from '../../widgets/icons'
import './CarouselItem.css'
import { useNavigate } from 'react-router-dom';

interface ICarouselProps {
	title: string
	backdrop_path: string
	vote_average: string
	id: number
}

const CarouseItem: FC<ICarouselProps> = ({
	backdrop_path,
	title,
	vote_average,
	id
}) => {

	const navigate = useNavigate()

	return (
		<div onClick={() => navigate(`movieDetails/${id}`)} className='carousel-item'>
			<img
				className='carousel-item__img'
				src={`${BASE_IMAGE_URL}${backdrop_path}`}
				alt={title}
			/>
			<div className='carousel-movies__item-info'>
				<span className='carousel-movies__item-info__title'>{title}</span>
				<button>Watch Now</button>
				<p className='carousel-movies__item-info__vote'>
					Vote average <span>{vote_average}</span>
				</p>
			</div>
			<Icons.BookMark className='carousel-movies__item-info__favorite' />
		</div>
	)
}

export default CarouseItem
