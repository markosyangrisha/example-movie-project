import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { Icons } from '../../widgets/icons'
import './Form.css'

interface IFromData {
	username: string
	email: string
	password: string
}

const Form: FC = () => {
	const { register, handleSubmit } = useForm<IFromData>()
	const { handlerFormStat, closeOpenForm, passwordEye } = useActions()
	const { signIn, signUp, isOpenEye } = useAppSelector(
		state => state.form
	)

	const formSubmit: SubmitHandler<IFromData> = data => {
		console.log(data)
	}

	return (
		<div className='form-modal__window'>
			<div className='form-modal__inner'>
				<Icons.Close onClick={() => closeOpenForm()} id='form-close__icon' />
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
				<form onSubmit={handleSubmit(formSubmit)} className='form'>
					{signUp && (
						<div className='form-inner form-username'>
							<input
								{...register('username')}
								type='text'
								placeholder='Username'
							/>
							<Icons.User id='form-user__icon' />
						</div>
					)}
					<div className='form-inner form-email'>
						<input {...register('email')} type='email' placeholder='Email*' />
						<Icons.Email id='form-email__icon' />
					</div>
					<div className='form-inner form-password'>
						<input
							{...register('password')}
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
					<button className='form-modal__button'>Create an account</button>
				</form>
			</div>
		</div>
	)
}

export default Form
