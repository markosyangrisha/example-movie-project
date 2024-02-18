import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { IUserData } from '../../server/userTypes'
import { Icons } from '../../widgets/icons'
import { useLoginHandler } from './login'
import { useRegistrationHandler } from './registration'
import './Form.css'

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IUserData>()

	const { handlerFormStat, closeOpenForm, passwordEye, confirmPasswordEye } =
		useActions()
	const { signIn, signUp, isOpenEye, isOpenEyeConfirm } = useAppSelector(
		state => state.formAuth
	)
	const { registration } = useRegistrationHandler(reset)
	const { login } = useLoginHandler(reset)

	return (
		<div className='form-modal__window'>
			<div className='form-modal__inner'>
				<Icons.Close
					onClick={() => closeOpenForm(false)}
					id='form-close__icon'
				/>
				<button
					onClick={() => handlerFormStat('signIn')}
					className={`form-sign_in-btn ${signIn && 'active-form'}`}
				>
					Sign In
				</button>
				<button
					onClick={() => handlerFormStat('signUp')}
					className={`form-sign_up-btn ${signUp && 'active-form'}`}
				>
					Sign Up
				</button>
				<form
					onSubmit={signUp ? handleSubmit(registration) : handleSubmit(login)}
					className='form'
				>
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
							<Icons.Eye onClick={() => passwordEye()} id='form-eye__icon' />
						) : (
							<Icons.EyeOff
								onClick={() => passwordEye()}
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
									onClick={() => confirmPasswordEye()}
									id='form-eye__icon'
								/>
							) : (
								<Icons.EyeOff
									onClick={() => confirmPasswordEye()}
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

export default Form
