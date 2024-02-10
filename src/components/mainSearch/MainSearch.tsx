import { FC } from 'react'
import {Icons} from '../../widgets/icons'
import './MainSearch.css'

const MainSearch: FC = () => {
	return (
		<div className='main-search'>
			<div className='main-search__input'>
				<input id='search-input' type='text' placeholder='search...' />
				<Icons.SearchIcon className='search-icon'/>
			</div>
		</div>
	)
}

export default MainSearch
