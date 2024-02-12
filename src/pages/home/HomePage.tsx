import { FC } from 'react'
import BigCarousel from '../../components/bigCarousel/BigCarousel'
import MainSearch from '../../components/mainSearch/MainSearch'
import PopularMovies from '../../components/popularMovies/PopularMovies'
import TopRated from '../../components/topRated/TopRated'
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
					<MainSearch />
				</div>
				<BigCarousel />
				<PopularMovies />
				<TopRated />
			</div>
		</div>
	)
}

export default HomePage
