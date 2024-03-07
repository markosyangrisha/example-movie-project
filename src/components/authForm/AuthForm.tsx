import { FC, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAppSelector } from '../../hooks/redux'
import { IUserData } from '../../server/userTypes'
import { Icons } from '../../widgets/icons'

import { useActions } from '../../hooks/actions'
import {
	selectIsOpenEye,
	selectIsOpenEyeConfirm,
	selectSignIn,
	selectSignUp,
} from '../../store/slices/formSlice/formSelect'
import { useLoginHandler } from './login'
import { useRegistrationHandler } from './registration'
import './AuthForm.css'

const AuthForm: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		setFocus,
	} = useForm<IUserData>()

	const { handlerFormState, passwordEye, confirmPasswordEye } = useActions()
	const signIn = useAppSelector(selectSignIn)
	const signUp = useAppSelector(selectSignUp)
	const isOpenEyeConfirm = useAppSelector(selectIsOpenEyeConfirm)
	const isOpenEye = useAppSelector(selectIsOpenEye)
	const { closeOpenForm } = useActions()
	const { registration } = useRegistrationHandler(reset)
	const { login } = useLoginHandler(reset)

	const handlerCloseOpenForm = useCallback(
		() => closeOpenForm(false),
		[closeOpenForm]
	)

	const handlerFormStatSignIn = useCallback(
		() => handlerFormState('signIn'),
		[handlerFormState]
	)
	const handlerFormStatSignUp = useCallback(
		() => handlerFormState('signUp'),
		[handlerFormState]
	)
	const handlerPasswordEye = useCallback(() => passwordEye(), [passwordEye])

	const handlerConfirmPasswordEye = useCallback(
		() => confirmPasswordEye(),
		[confirmPasswordEye]
	)

	useEffect(() => {
		setFocus(signUp ? 'username' : signIn ? 'email' : 'username')
	}, [setFocus, signUp, signIn])

	const handleFormSubmit = signUp ? registration : login

	// console.log('Render Auth Form ')

	return (
		<div className='form-modal__window'>
			<div className='form-modal__inner'>
				<Icons.Close onClick={handlerCloseOpenForm} id='form-close__icon' />
				<button
					onClick={handlerFormStatSignIn}
					className={`form-sign_in-btn ${signIn && 'active-form'}`}
				>
					Sign In
				</button>
				<button
					onClick={handlerFormStatSignUp}
					className={`form-sign_up-btn ${signUp && 'active-form'}`}
				>
					Sign Up
				</button>
				<form onSubmit={handleSubmit(handleFormSubmit)} className='form'>
					{signUp && (
						<>
							<div className='form-inner form-username'>
								<input
									{...register('username', { required: 'fields are required' })}
									type='text'
									placeholder='Username'
								/>
								<Icons.User id='form-user__icon' />
							</div>
							<p className='auth-error'>
								{errors?.username && errors?.username.message}
							</p>
						</>
					)}
					<div className='form-inner form-email'>
						<input
							{...register('email', { required: 'fields are required' })}
							type='email'
							placeholder='Email*'
						/>
						<Icons.Email id='form-email__icon' />
					</div>
					<p className='auth-error'>{errors?.email && errors?.email.message}</p>
					<div className='form-inner form-password'>
						<input
							{...register('password', { required: 'fields are required' })}
							type={`${isOpenEye ? 'text' : 'password'}`}
							placeholder='Password*'
						/>
						<Icons.Lock id='form-lock__icon' />
						{isOpenEye ? (
							<Icons.Eye onClick={handlerPasswordEye} id='form-eye__icon' />
						) : (
							<Icons.EyeOff
								onClick={handlerPasswordEye}
								id='form-eye__off-icon'
							/>
						)}
					</div>
					<p className='auth-error'>
						{errors?.password && errors?.password.message}
					</p>
					{signUp && (
						<div className='form-inner form-password'>
							<input
								{...register('confirmPassword', {
									required: 'fields are required',
								})}
								type={`${isOpenEyeConfirm ? 'text' : 'password'}`}
								placeholder='Confirm password*'
							/>
							<Icons.Lock id='form-lock__icon' />
							{isOpenEyeConfirm ? (
								<Icons.Eye
									onClick={handlerConfirmPasswordEye}
									id='form-eye__icon'
								/>
							) : (
								<Icons.EyeOff
									onClick={handlerConfirmPasswordEye}
									id='form-eye__off-icon'
								/>
							)}
						</div>
					)}
					<p className='auth-error'>
						{errors?.confirmPassword && errors?.confirmPassword.message}
					</p>
					<button className='form-modal__button'>Create an account</button>
				</form>
			</div>
		</div>
	)
}

export default AuthForm
