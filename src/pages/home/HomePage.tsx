import { FC } from 'react'
import BigCarousel from '../../components/bigCarousel/BigCarousel'
import CarouselComponent from '../../components/carouselComponent/CarouselComponent'
import './HomePage.css'

const HomePage: FC = () => {
	return (
		<div className='home-page'>
			<div className='home-page_main'>
				<div className='film-header__info'>
					<p className='film-info'>
						Movies - scary, funny, dramatic, romantic - make us experience a
						whole range of emotions. Many films - many impressions!
					</p>
				</div>
				<BigCarousel />
				<CarouselComponent />
			</div>
		</div>
	)
}

export default HomePage
