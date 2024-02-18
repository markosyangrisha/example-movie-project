import { FC } from 'react'
import { useActions } from '../../hooks/actions'
import { Icons } from '../../widgets/icons'
import BurgerMenu from '../burgerMenu/BurgerMenu'
import Logo from '../logo/Logo'
import MainSearch from '../mainSearch/MainSearch'
import UserEntry from '../userEntry/UserEntry'
import NavBar from './navBar/NavBar'
import './Header.css'
import { useAppSelector } from '../../hooks/redux'
import UserProfile from '../userProfile/UserProfile'

const Header: FC = () => {
	const { openBurgerMenuHandler } = useActions()
	const { isUserAuth } = useAppSelector(state => state.userAuth)

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
					{isUserAuth ? <UserProfile /> : <UserEntry />}
					<BurgerMenu />
				</div>
			</div>
		</>
	)
}

export default Header
