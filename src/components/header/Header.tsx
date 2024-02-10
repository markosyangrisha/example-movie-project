import { FC } from 'react'
import Logo from '../logo/Logo'
import NavBar from './navBar/NavBar'

import './Header.css'
import BurgerMenu from '../burgerMenu/BurgerMenu'

const Header: FC = () => {
	return (
		<div className='header'>
			<div className='header-container container'>
				<Logo />
				<NavBar />
				<BurgerMenu />
			</div>
		</div>
	)
}

export default Header
