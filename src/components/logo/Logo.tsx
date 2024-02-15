import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../../widgets/icons'
import './Logo.css'

const Logo: FC = () => {
	return (
		<Link to='/' className='logo'>
			<Icons.Film />
			<span>Movie</span>
		</Link>
	)
}

export default Logo
