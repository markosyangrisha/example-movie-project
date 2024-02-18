import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { useActions } from '../../hooks/actions'
import { IUserData } from '../../server/userTypes'
import {
	useUserSessionQuery,
	useUserTokenQuery,
} from '../../store/slices/formApi'
import {
	useGetUserDataLoginQuery,
	useGetUserDataRegisterQuery,
	useLoginUserMutation,
} from '../../store/slices/usersStateApi'
import { URL_TOKEN__AUTH } from '../../server/server';

export const useLoginHandler = (reset: UseFormReset<IUserData>) => {
	const { data: loginData } = useGetUserDataLoginQuery()
	const { data: token } = useUserTokenQuery()
	const { data: session } = useUserSessionQuery()
	const { data: registerUser } = useGetUserDataRegisterQuery()
	const [loginUser] = useLoginUserMutation()
	const { authUser } = useActions()

	const login: SubmitHandler<Omit<IUserData, 'id'>> = async formData => {
		const isRegister = registerUser?.find(
			user =>
				user.email === formData.email && user.password === formData.password
		)

		if (!isRegister) {
			console.log('A user with these credentials was not found.')
			return
		}

		const isLogin = loginData?.find(
			user =>
				user.email === formData.email && user.password === formData.password
		)

		if (isLogin) {
			authUser({ token, session })
			window.location.href = `${URL_TOKEN__AUTH}${token?.request_token}`
			return
		}

		await loginUser(formData)
			.unwrap()
			.then(res => console.log(res))
			.catch(error => console.log(error))

		window.location.href = `${URL_TOKEN__AUTH}${token?.request_token}`
		authUser({ token, session })
		reset()
	}

	return {
		login,
	}
}
