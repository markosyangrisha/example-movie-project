import { FC } from 'react'
import Logo from '../logo/Logo'
import NavBar from './navBar/NavBar'
import BurgerMenu from '../burgerMenu/BurgerMenu'
import './Header.css'

const Header: FC = () => {
	return (
		<>
			<div className='header'>
				<div className='header-container container'>
					<Logo />
					<NavBar />
					<BurgerMenu/>
				</div>
			</div>
		</>
	)
}

export default Header
