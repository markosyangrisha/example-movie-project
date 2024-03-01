import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USERS_BASE_URL } from '../../../server/server'
import { IUserData } from '../../../server/userTypes'
import {
	userStateInvalidatesTags,
	userStateProvideTags,
	userStateTagTypes,
} from './userStateParams'

export const usersApi = createApi({
	reducerPath: 'users/Api',
	baseQuery: fetchBaseQuery({ baseUrl: USERS_BASE_URL }),
	tagTypes: userStateTagTypes,

	endpoints: build => ({
		registerUser: build.mutation<IUserData, Omit<IUserData, 'id'>>({
			query: body => ({
				url: 'register',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body,
			}),
			invalidatesTags: userStateInvalidatesTags,
		}),
		loginUser: build.mutation<IUserData, Omit<IUserData, 'username'>>({
			query: body => ({
				url: 'login',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body,
			}),
			invalidatesTags: userStateInvalidatesTags,
		}),
		getUserDataRegister: build.query<IUserData[], void>({
			query: () => ({
				url: 'register',
			}),
			providesTags: userStateProvideTags,
		}),
		getUserDataRegisterById: build.query<IUserData, string>({
			query: (id: string) => ({
				url: `register/${id}`,
			}),
			providesTags: userStateProvideTags,
		}),
		getUserDataLogin: build.query<Omit<IUserData[], 'id' | 'username'>, void>({
			query: () => ({
				url: 'login',
			}),
			providesTags: userStateProvideTags,
		}),
	}),
})

export const {
	useRegisterUserMutation,
	useGetUserDataRegisterQuery,
	useLoginUserMutation,
	useGetUserDataLoginQuery,
	useGetUserDataRegisterByIdQuery,
	useLazyGetUserDataRegisterByIdQuery
} = usersApi
