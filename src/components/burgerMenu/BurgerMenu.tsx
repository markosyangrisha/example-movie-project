import { FC, useState } from 'react'
import { Icons } from '../../widgets/icons'
import NavBar from '../header/navBar/NavBar'
import Logo from '../logo/Logo'
import './BurgerMenu.css'

type BurgerState = boolean;

const BurgerMenu: FC = () => {
	const [burger, setBurger] = useState<BurgerState>(false)

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
						<NavBar setBurger={setBurger} />
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
