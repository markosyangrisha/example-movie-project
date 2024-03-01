import { FC } from 'react'
import { useActions } from '../../hooks/actions'
import './UserEntry.css'
import Form from '../authForm/AuthForm'
import { useAppSelector } from '../../hooks/redux'
import { selectIsOpenForm } from '../../store/slices/formSlice/formSelect';

const UserEntry: FC = () => {
	const { handlerFormState } = useActions()
	const isOpenForm = useAppSelector(selectIsOpenForm)

	return (
		<div className='user-entry'>
			<button onClick={() => handlerFormState('signIn')} id='sign-in'>
				Sign In
			</button>
			<button onClick={() => handlerFormState('signUp')} id='sign-up'>
				Sign Up
			</button>
			{isOpenForm && <Form />}
		</div>
	)
}

export default UserEntry
