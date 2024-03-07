import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Icons } from '../../../widgets/icons'
import GenresDropdownList from '../../genresDropdownList/GenresDropdownList'

import './NavBar.css'

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
						<span>
							<Icons.Genres />
							Genres
							<Icons.arrowDown className='arrow-down__icon' />
						</span>
						<GenresDropdownList />
					</div>
					<NavLink to='/favorites'>
						<Icons.Favorites />
						Favorites
					</NavLink>
				</div>
			</div>
		</>
	)
}

export default NavBar
