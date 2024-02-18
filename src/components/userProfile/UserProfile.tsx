import { FC } from 'react'
import './UserProfile.css'
import { useActions } from '../../hooks/actions';

const UserProfile: FC = () => {
	const {logoutUser} = useActions()

	return (
		<div>
			<button style={{ color: 'blue' }} onClick={() => logoutUser()}>
				logout
			</button>
		</div>
	)
}

export default UserProfile
