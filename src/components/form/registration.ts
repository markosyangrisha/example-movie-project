import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { useActions } from '../../hooks/actions'
import { IUserData } from '../../server/userTypes'
import { useGetUserDataRegisterQuery, useRegisterUserMutation } from '../../store/slices/userStateApi/usersStateApi'

export const useRegistrationHandler = (reset: UseFormReset<IUserData>) => {
	const [postUserData] = useRegisterUserMutation()
	const {data:users} = useGetUserDataRegisterQuery()
	const { handlerFormStat } = useActions()

	const registration: SubmitHandler<Omit<IUserData, 'id'>> = async formData => {

		const isRegister = users?.find((user) => user.email === formData.email || user.password === formData.password) 

		if(isRegister) {
			console.log('with this data the user already exists')
			return
		}
 
		try {
			if (formData.password !== formData.confirmPassword) {
				throw new Error('Password mismatch')
			}
			await postUserData({ ...formData, bookmark: [] })
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
