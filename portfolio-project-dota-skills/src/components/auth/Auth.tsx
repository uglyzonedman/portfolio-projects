import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useRegister } from '../../hooks/useRegister'

const Auth = () => {
	const { type } = useParams()
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const { mutate: registerFunc } = useRegister({ login, password })
	return (
		<div className='flex items-center justify-center '>
			<form
				onSubmit={e => {
					e.preventDefault()
					if (type == 'login') {
					} else if (type == 'register') {
						registerFunc()
					}
				}}
				className='relative flex flex-col bg-gray-800 w-[450px] rounded-xl mt-[10%] p-8 '
			>
				<h3 className='text-white font-bold text-center text-2xl mb-6'>
					{type == 'login' && 'Форма авторизии'}
					{type == 'register' && 'Форма регистрации'}
				</h3>
				<div className='flex flex-col space-y-4'>
					<div>
						<label className='text-gray-500 block mt-3'>
							Логин
							<input
								onChange={e => setLogin(e.target.value)}
								type={'text'}
								placeholder='Введите логин'
								className='rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100'
							/>
						</label>
					</div>
					<div>
						<label className='text-gray-500 block mt-3'>
							Пароль
							<input
								onChange={e => setPassword(e.target.value)}
								type={'password'}
								placeholder={'Введите пароль'}
								className='rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100'
							/>
						</label>
					</div>
				</div>
				{type == 'register' && (
					<Link className='text-white text-lg mt-2' to={'/auth/login'}>
						Есть аккаунт?
					</Link>
				)}
				{type == 'login' && (
					<Link className='text-white text-lg mt-2' to={'/auth/register'}>
						Нет аккаунта?
					</Link>
				)}
				<button
					type='submit'
					className='mt-6 transition block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg'
				>
					{type == 'register' && 'Создать аккаунт'}
					{type == 'login' && 'Авторизоваться'}
				</button>
			</form>
		</div>
	)
}

export default Auth
