import { FC, useState } from 'react'
import {Icons} from '../../widgets/icons'
import { NavLink } from 'react-router-dom'
import UserEntry from '../userEntry/UserEntry'
import './BurgerMenu.css'

const BurgerMenu: FC = () => {
	const [burger, setBurger] = useState<boolean>(false)

	return (
		<>
			<div className='burger-menu'>
				{burger ? (
					<div className='burger-menu_inner'>
						<Icons.Close
							className='burger-close__icon'
							onClick={() => setBurger(false)}
						/>
						<div className='burger-nav_bar'>
							<div className='burger-menu__list'>
								<h2>Menu</h2>
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
								<UserEntry />
							</div>
						</div>
					</div>
				) : (
					<Icons.Burger
						className='open-burger__icon'
						onClick={() => setBurger(true)}
					/>
				)}
			</div>
		</>
	)
}

export default BurgerMenu
