import { FC } from 'react'
import { useActions } from '../../hooks/actions'
import './UserEntry.css'
import Form from '../form/Form'
import { useAppSelector } from '../../hooks/redux'

const UserEntry: FC = () => {
	const { handlerFormStat } = useActions()
	const { isOpenForm } = useAppSelector(state => state.form)

	return (
		<div className='user-entry'>
			<button onClick={() => handlerFormStat('signIn')} id='sign-in'>
				Sign In
			</button>
			<button onClick={() => handlerFormStat('signUp')} id='sign-up'>
				Sign Up
			</button>
			{isOpenForm && <Form />}
		</div>
	)
}

export default UserEntry
