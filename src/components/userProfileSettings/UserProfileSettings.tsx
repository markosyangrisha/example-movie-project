import { FC } from 'react';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import { selectUserData } from '../../store/slices/userStateSlice/userStateSelector';
import './UserProfileSettings.css';

const UserProfileSettings: FC = () => {
	const { logOutUser } = useActions();
	const user = useAppSelector(selectUserData);

	console.log(user);

	return (
		<div className='user-profile__settings'>
			<button className='logout-user__btn' onClick={() => logOutUser()}>
				Go out
			</button>
		</div>
	);
};

export default UserProfileSettings;
