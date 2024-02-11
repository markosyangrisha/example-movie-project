import { FC } from 'react'
import { Link } from 'react-router-dom'
import { URL_GENRES } from '../../server/params'
import { useFetchGenresQuery } from '../../store/fetchGenres/genresServerAPI'
import './GenresDropdownList.css'

const GenresDropdownList: FC = () => {
	const { data } = useFetchGenresQuery(URL_GENRES)


	return (
		<div className='dropdown'>
			<ul className='genres-list'>
				{data?.genres?.map(genre => (
					<li className='genres-list__item' key={genre.id}>
						<Link className='genres-list__link' to={`/${genre.name}`}>
							{genre.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default GenresDropdownList
