import { FC } from 'react'
import { useActions } from '../../hooks/actions'
import { Icons } from '../../widgets/icons'
import BurgerMenu from '../burgerMenu/BurgerMenu'
import Logo from '../logo/Logo'
import MainSearch from '../mainSearch/MainSearch'
import UserEntry from '../userEntry/UserEntry'
import './Header.css'
import NavBar from './navBar/NavBar'

const Header: FC = () => {
	const { openBurgerMenuHandler } = useActions()


	return (
		<>
			<div className='header'>
				<div className='header-container container'>
					<div className='burger-logo'>
						<Icons.Burger
							className='open-burger__icon'
							onClick={() => openBurgerMenuHandler(true)}
						/>
						<Logo />
					</div>
					<NavBar />
					<MainSearch />
					<UserEntry />
					<BurgerMenu />
				</div>
			</div>
		</>
	)
}

export default Header
