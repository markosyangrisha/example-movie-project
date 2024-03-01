import { FC } from 'react'
import Carousel from '../carousel/Carousel'
import { carouselComponentParams } from './carouselComponentParams'

const CarouselComponent: FC = () => {
	return carouselComponentParams.map(item => (
		<Carousel key={item.id} {...item} />
	))
}

export default CarouselComponent
