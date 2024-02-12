import { FC, FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icons } from '../../widgets/icons'
import './MainSearch.css'
import { useSearchMoviesQuery } from '../../store/slices/searchSlice/searchServerAPI'

interface IFormFields {
	searchText: HTMLInputElement
}

const MainSearch: FC = () => {
	const [searchText, setSearchText] = useState<string>('')
	const [toggleText, setToggleText] = useState<string>('')
	const navigate = useNavigate()

	const { data } = useSearchMoviesQuery(toggleText, {
		skip: toggleText?.length < 3,
	})

	const handlerForm: FormEventHandler<
		HTMLFormElement & IFormFields
	> = event => {
		event.preventDefault()
		const { text } = event.currentTarget
		setToggleText(text.value)
		navigate()

	}

	return (
		<div className='main-search'>
			<div className='main-search__input'>
				<Icons.Search className='search-icon' />
				<form onSubmit={handlerForm} className='search-form'>
					<input
						id='search-input'
						type='text'
						placeholder='search...'
						name='text'
						onChange={event => setSearchText(event.target.value)}
					/>
				</form>
			</div>
		</div>
	)
}

export default MainSearch
