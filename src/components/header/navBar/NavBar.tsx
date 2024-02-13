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
						{/* Dropdown List */}
						<GenresDropdownList />
						{/* Dropdown List */}
					</div>
					<NavLink to='/favorites'>
						<Icons.BookMark />
						Bookmark
					</NavLink>
				</div>
			</div>
			{/* <MainSearch />
			<UserEntry /> */}
		</>
	)
}

export default NavBar
