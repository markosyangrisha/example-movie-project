import { FC } from 'react'
import { BASE_IMAGE_URL } from '../../server/server'
import './CarouselItem.css'

interface ICarouselProps {
	poster_path: string
	title: string
	backdrop_path: string
}

const CarouseItem: FC<ICarouselProps> = ({
	poster_path,
	backdrop_path,
	title,
}) => {
	return (
		<div className='carousel-item'>
			<img src={`${BASE_IMAGE_URL}${backdrop_path}`} alt={title} />
		</div>
	)
}

export default CarouseItem
