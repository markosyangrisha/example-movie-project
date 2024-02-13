import { FC } from 'react'
import './UserEntry.css'

const UserEntry: FC = () => {
	return (
		<div className='user-entry'>
			<button id='sign-in'>Sign In</button>
			<button id='sign-up'>Sign Up</button>
		</div>
	)
}

export default UserEntry
