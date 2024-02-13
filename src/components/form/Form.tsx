import { FC } from 'react'
import { Icons } from '../../widgets/icons'
// import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'
import './Form.css'

const Form: FC = () => {
	// const {register, handleSubmit, formState} = useForm()

	return (
		<div className='form-modal__window'>
			<div className='form-modal__inner'>
				<Icons.Close id='form-close__icon' />
				<button className='form-sign_in-btn'>Sign Up</button>
				<button className='form-sign_up-btn'>Sign In</button>
				<form className='form'>
					<div className='form-inner form-username'>
						<input type='text' placeholder='Username' />
						<Icons.User id='form-user__icon' />
					</div>
					<div className='form-inner form-email'>
						<input type='email' placeholder='Email*' />
						<Icons.Email id='form-email__icon' />
					</div>
					<div className='form-inner form-password'>
						<input type='password' placeholder='Password*' />
						<Icons.Lock id='form-lock__icon' />
						<Icons.Eye id='form-eye__icon' />
						<Icons.EyeOff id='form-eye__off-icon' />
					</div>
					<button className='form-modal__button'>Create an account</button>
				</form>
				<p className='form-modal__inner-text'>
					Do you have account? <Link to={'signIn'}>Sign In</Link>
				</p>
			</div>
		</div>
	)
}

export default Form
