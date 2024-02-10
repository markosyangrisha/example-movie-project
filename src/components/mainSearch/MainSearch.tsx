import { FC, useState } from 'react'
import { useDebounce } from '../../hooks/debounce'
import { useSearchMoviesQuery } from '../../store/slices/searchSlice/searchServerAPI'
import { Icons } from '../../widgets/icons'
import SearchDropdownList from '../searchDropdownList/SearchDropdownList'
import './MainSearch.css'

const MainSearch: FC = () => {
	const [searchText, setSearchText] = useState<string>('')
	const [isOpenSearch, setOpenSearch] = useState<boolean>(false)
	const debounced = useDebounce(searchText)
	const { data } = useSearchMoviesQuery(debounced, {
		skip: debounced?.length < 3,
	})

	return (
		<div className='main-search'>
			<div className='main-search__input'>
				<Icons.Search
					onClick={() => setOpenSearch(prev => !prev)}
					className='search-icon'
				/>
				<div className={`${isOpenSearch ? 'open-search' : 'close-search'}`}>
					<input
						id='search-input'
						className={`${isOpenSearch ? 'open-search' : 'close-search'}`}
						type='text'
						placeholder='search...'
						onChange={event => setSearchText(event.target.value)}
					/>
				</div>
			</div>
			<div className='search-dropdown'>
				<ul className='search-dropdown__list'>
					{data?.results?.map(movie => (
						<SearchDropdownList key={movie.id} {...movie} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default MainSearch
