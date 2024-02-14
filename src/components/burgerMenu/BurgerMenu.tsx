import { FC } from 'react'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { Icons } from '../../widgets/icons'
import NavBar from '../header/navBar/NavBar'
import Logo from '../logo/Logo'
import UserEntry from '../userEntry/UserEntry'
import './BurgerMenu.css'

const BurgerMenu: FC = () => {
	const { isOpenGenresList } = useAppSelector(state => state.genresList)
	const { toggleList } = useActions()

	return (
		<>
			<div className='burger-menu'>
				{isOpenGenresList ? (
					<div className='burger-menu_inner'>
						<Icons.Close
							className='burger-close__icon'
							onClick={() => toggleList(false)}
						/>
						<Logo />
						<NavBar />
						<UserEntry />
					</div>
				) : (
					<Icons.Burger
						className='open-burger__icon'
						onClick={() => toggleList(true)}
					/>
				)}
			</div>
		</>
	)
}

export default BurgerMenu
