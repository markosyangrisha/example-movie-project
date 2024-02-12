import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { toggleList } from '../../store/slices/genresList/genresList'
import { Icons } from '../../widgets/icons'
import NavBar from '../header/navBar/NavBar'
import Logo from '../logo/Logo'
import './BurgerMenu.css'

const BurgerMenu: FC = () => {
	const { isOpenGenresList } = useAppSelector(state => state.genresList)
	const dispatch = useAppDispatch()

	return (
		<>
			<div className='burger-menu'>
				{isOpenGenresList ? (
					<div className='burger-menu_inner'>
						<Icons.Close
							className='burger-close__icon'
							onClick={() => dispatch(toggleList(false))}
						/>
						<Logo />

						<NavBar />
					</div>
				) : (
					<Icons.Burger
						className='open-burger__icon'
						onClick={() => dispatch(toggleList(true))}
					/>
				)}
			</div>
		</>
	)
}

export default BurgerMenu
