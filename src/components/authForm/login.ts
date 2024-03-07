import { useRef } from 'react'
import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { useActions } from '../../hooks/actions'
import { IUserData } from '../../server/userTypes'
import {
	useGetUserDataLoginQuery,
	useGetUserDataRegisterQuery,
	useLoginUserMutation,
} from '../../store/slices/userStateSlice/usersStateApi'

export const useLoginHandler = (reset: UseFormReset<IUserData>) => {
	const loginInputRef = useRef<HTMLInputElement>(null)
	const { data: loginData } = useGetUserDataLoginQuery()
	const { data: registerData } = useGetUserDataRegisterQuery()
	const [loginUser] = useLoginUserMutation()
	const { authUser, closeOpenForm } = useActions()

	const login: SubmitHandler<IUserData> = async formData => {
		const isRegister = registerData?.find(
			user =>
				user.email === formData.email && user.password === formData.password
		)

		if (!isRegister) {
			console.log('A user with these credentials was not found.')
			return
		}

		const isLoginIn = loginData?.find(
			user =>
				user.email === formData.email && user.password === formData.password
		)

		if (isLoginIn) {
			authUser({ ...formData, id: isRegister.id });
			return;
		}
		try {
			const response = await loginUser(formData)

			if (!response) throw new Error('this is Error')

			authUser({ ...formData, id: isRegister.id })
		} catch (error) {
			console.log('error', error)
		}
		reset()
		closeOpenForm(false)
	}

	return {
		login,
		loginInputRef,
	}
}
