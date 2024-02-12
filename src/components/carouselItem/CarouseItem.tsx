import { FC } from 'react'
import { BASE_IMAGE_URL } from '../../server/server'
import { Icons } from '../../widgets/icons'
import './CarouselItem.css'

interface ICarouselProps {
	title: string
	backdrop_path: string
	vote_average: string
}

const CarouseItem: FC<ICarouselProps> = ({
	backdrop_path,
	title,
	vote_average,
}) => {
	return (
		<div className='carousel-item'>
			<img src={`${BASE_IMAGE_URL}${backdrop_path}`} alt={title} />
			<div className='carousel-movies__item-info'>
				<span className='carousel-movies__item-info__title'>{title}</span>
				<button>Watch Now</button>
				<p className='carousel-movies__item-info__vote'>
					Vote average <span>{vote_average}</span>
				</p>
			</div>
			<Icons.Favorite className='carousel-movies__item-info__favorite' />
		</div>
	)
}

export default CarouseItem
