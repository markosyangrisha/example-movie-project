import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USERS_BASE_URL } from '../../server/server'
import { IUserData } from './../../server/userTypes'

export const userStateApi = createApi({
	reducerPath: 'userStateApi',
	baseQuery: fetchBaseQuery({ baseUrl: USERS_BASE_URL }),
	tagTypes: ['Users'],
	endpoints: build => ({
		registerUser: build.mutation<IUserData, Omit<IUserData, 'id'>>({
			query: body => ({
				url: 'register',
				method: 'POST',
				body,
			}),
			invalidatesTags: () => [{ type: 'Users' }],
		}),
		loginUser: build.mutation<IUserData, Omit<IUserData, 'id' | 'username'>>({
			query: body => ({
				url: 'login',
				method: 'POST',
				body,
			}),
			invalidatesTags: () => [{ type: 'Users' }],
		}),
		getUserDataRegister: build.query<IUserData[], void>({
			query: () => ({
				url: 'register',
				method: 'GET',
			}),
			providesTags: () => [{ type: 'Users' }],
		}),
		getUserDataLogin: build.query<Omit<IUserData[], 'id' | 'username'>, void>({
			query: () => ({
				url: 'login',
				method: 'GET',
			}),
			providesTags: () => [{ type: 'Users' }],
		}),
	}),
})

export const {
	useRegisterUserMutation,
	useGetUserDataRegisterQuery,
	useLoginUserMutation,
	useGetUserDataLoginQuery,
} = userStateApi
