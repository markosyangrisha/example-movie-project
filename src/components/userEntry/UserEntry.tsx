import { FC } from 'react'
import { NavLink } from 'react-router-dom'
// import { IoLogIn } from 'react-icons/io5'
import './UserEntry.css'

const UserEntry: FC = () => {
	return (
		<div className='user-entry'>
			<NavLink id='sign-in' to='sign-in'>Sign In</NavLink>
			<NavLink id='sign-up' to='sign-Up'>Sign Up</NavLink>
		</div>
	)
}

export default UserEntry
