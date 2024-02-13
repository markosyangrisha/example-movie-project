import { FC, FormEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icons } from '../../widgets/icons'
import './MainSearch.css'

interface IFormFields {
	searchText: HTMLInputElement
}

const MainSearch: FC = () => {
	const navigate = useNavigate()

	const handlerForm: FormEventHandler<
		HTMLFormElement & IFormFields
	> = event => {
		event.preventDefault()
		const { text } = event.currentTarget
		navigate('/searchMoviesPage', { state: text.value })
		text.value = ''
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
					/>
				</form>
			</div>
		</div>
	)
}

export default MainSearch
