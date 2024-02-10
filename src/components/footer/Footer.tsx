import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../../widgets/icons'
import './Footer.css'

const Footer: FC = () => {
	return (
		<footer>
			<div className='footer'>
				<div className='row'>
					<a href='#'>
						<Icons.GitHub />
					</a>
					<a href='#'>
						<Icons.Linkedin />
					</a>
				</div>
				<div className='row'>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/favorite'>Favorite</Link>
						</li>
						<li>
							s<a href='#'>Privacy Policy</a>
						</li>
						<li>
							<a href='#'>Terms & Conditions</a>
						</li>
						<li>
							<a href='#'>Career</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
