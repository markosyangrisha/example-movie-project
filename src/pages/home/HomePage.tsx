import { FC } from 'react'
import TopRated from '../../components/topRated/TopRated'
import UpcomingMovies from '../../components/upcomingMovies/UpcomingMovies'
import BigCarousel from '../../components/bigCarousel/BigCarousel'
import PopularMovies from '../../components/popularMovies/PopularMovies'
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
				<UpcomingMovies />
				<PopularMovies />
				<TopRated />
			</div>
		</div>
	)
}

export default HomePage
