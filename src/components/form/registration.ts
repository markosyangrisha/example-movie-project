import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { IUserData } from '../../server/userTypes'
import { useRegisterUserMutation } from '../../store/slices/usersStateApi'
import { useActions } from '../../hooks/actions';

export const useRegistrationHandler = (reset: UseFormReset<IUserData>) => {
	const [postUserData] = useRegisterUserMutation()
	const {handlerFormStat} = useActions()

	const registration: SubmitHandler<Omit<IUserData, 'id'>> = async formData => {
		try {
			if (formData.password !== formData.confirmPassword) {
				throw new Error('Password mismatch')
			}
			await postUserData({ ...formData })
			reset()

			handlerFormStat('signIn')

		} catch (error) {
			console.log(error)
		}
	}

	return {
		registration,
	}
}
