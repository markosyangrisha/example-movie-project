import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddToBookMark } from '../../hooks/addToBookMark'
import { IMoviesData } from '../../server/moviesTypes'
import { BASE_IMAGE_URL } from '../../server/server'
import { Icons } from '../../widgets/icons'
import './CarouselItem.css'

const CarouselItem: FC<IMoviesData> = ({
	id,
	backdrop_path,
	title,
	vote_average,
}) => {
	const navigate = useNavigate()
	const { addToBookMarkList, isAddBookMark } = useAddToBookMark()

	// console.log('carousel Item -- ', isAddBookMark)

	return (
		<div className='carousel-item'>
			<img
				className='carousel-item__img'
				src={`${BASE_IMAGE_URL}${backdrop_path}`}
				alt={title}
			/>
			<div
				onClick={() => navigate(`movieDetails/${id}`)}
				className='carousel-movies__item-info'
			>
				<span className='carousel-movies__item-info__title'>{title}</span>
				<button>Watch Now</button>
				<p className='carousel-movies__item-info__vote'>
					Vote average <span>{vote_average}</span>
				</p>
			</div>
			<Icons.BookMark
				style={{ color: `${isAddBookMark ? 'red' : 'yellow'}` }}
				onClick={() => addToBookMarkList(id)}
				className='carousel-movies__item-info__favorite'
			/>
		</div>
	)
}

export default CarouselItem
