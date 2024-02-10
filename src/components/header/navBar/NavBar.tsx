import { FC } from 'react'
import { Icons } from '../../../widgets/icons'
import { NavLink } from 'react-router-dom'
import UserEntry from '../../userEntry/UserEntry'

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
					<NavLink to='category'>
						<Icons.Category />
						Category
					</NavLink>
					<NavLink to='/favorites'>
						<Icons.Favorite />
						Favorites
					</NavLink>
				</div>
				<UserEntry />
			</div>
		</>
	)
}

export default NavBar
