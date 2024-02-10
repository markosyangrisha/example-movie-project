import { FC } from 'react'
import { Link } from 'react-router-dom'
import {BASE_IMAGE_URL} from '../../server/server'
import './SearchDropdownList.css'

interface ISearchItemProps {
	title: string
	backdrop_path: string
	release_date: string
}

const SearchDropdownList: FC<ISearchItemProps> = ({
	title,
	backdrop_path,
	release_date,
}) => {
	return (
		<li className='search-dropdown__list-item'>
			<Link to='/'>
				<img src={`${BASE_IMAGE_URL}${backdrop_path}`} alt='movie' />
				<div className='search-dropdown__list-item__info'>
					<span>{title}</span>
					<br />
					<span>{release_date}</span>
				</div>
			</Link>
		</li>
	)
}

export default SearchDropdownList
