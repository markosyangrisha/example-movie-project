import { FC } from 'react';
import './UserProfile.css';
import UserProfileSettings from '../userProfileSettings/UserProfileSettings';

const UserProfile: FC = () => {
	return <div className='user-profile'>
		<UserProfileSettings/>
	</div>;
};

export default UserProfile;
