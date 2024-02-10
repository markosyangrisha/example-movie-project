import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Icons } from '../../../widgets/icons'
import GenresDropdownList from '../../genresDropdownList/GenresDropdownList'
import UserEntry from '../../userEntry/UserEntry'

import './NavBar.css'
import MainSearch from '../../mainSearch/MainSearch'

const NavBar: FC = () => {
	return (
		<>
			<div className='nav-bar'>
				<h2>Menu</h2>
				<div className='menu-list'>
					<NavLink to='/'>
						<Icons.Home />
						Home
					</NavLink>
					<div className='genres-dropdown'>
						<a href='#'>
							<Icons.Genres />
							Genres
							<Icons.arrowDown className='arrow-down__icon' />
						</a>
						{/* Dropdown List */}
						<GenresDropdownList />
						{/* Dropdown List */}
					</div>
					<NavLink to='/favorites'>
						<Icons.Favorite />
						Favorites
					</NavLink>
				</div>
				<MainSearch />
				<UserEntry />
			</div>
		</>
	)
}

export default NavBar
