import { create } from 'zustand'
import axios from 'axios'
import axiosInstance from '../api'
import Cookies from 'js-cookie'

const useAuthStore = create(set => ({
	user: null, // Хранит информацию о пользователе
	token: null, // Хранит токен авторизации
	isAuthenticated: false, // Статус авторизации
	error: null, // Ошибка авторизации
	// Действие для входа
	login: async ({ login, password }: { login: string; password: string }) => {
		try {
			const response = await axiosInstance.post('auth/login', {
				login,
				password,
			})

			const { user, tokens } = response.data
			const accessToken = tokens.accessToken
			const refreshToken = tokens.refreshToken
			set({
				user,
				accessToken,
				refreshToken,
				isAuthenticated: true,
				error: null,
			})

			Cookies.set('accessToken', accessToken)
			Cookies.set('refreshToken', refreshToken)
			localStorage.setItem('user', JSON.stringify(user))
		} catch (error: any) {
			set({
				user: null,
				token: null,
				isAuthenticated: false,
				error: error.response?.data?.message || 'Ошибка авторизации',
			})
		}
	},
	logout: () => {
		set({
			user: null,
			token: null,
			isAuthenticated: false,
		})

		localStorage.removeItem('token')
		localStorage.removeItem('user')
	},
}))

export default useAuthStore
