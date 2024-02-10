import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import './Main.css'

const Main: FC = () => {
	return (
		<div className='main'>
			<div className='container'>
				<Outlet />
			</div>
		</div>
	)
}

export default Main
