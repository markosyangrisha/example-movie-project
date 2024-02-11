import { FC, useState } from 'react'
import { Icons } from '../../widgets/icons'
import NavBar from '../header/navBar/NavBar'
import './BurgerMenu.css'
import Logo from '../logo/Logo'

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
						<Logo />
						<NavBar />
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
