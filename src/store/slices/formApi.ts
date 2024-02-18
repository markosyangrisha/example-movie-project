import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUserSession, IUserToken } from '../../server/formTypes'
import { USER_SESSION, USER_TOKEN } from '../../server/params'
import { BASE_URL } from '../../server/server'
import { Authorization } from './../../server/server'

export const formStateApi = createApi({
	reducerPath: 'formStateApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: build => ({
		userToken: build.query<IUserToken, void>({
			query: () => ({
				url: USER_TOKEN,
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization,
				},
			}),
		}),
		userSession: build.query<IUserSession, void>({
			query: () => ({
				url: USER_SESSION,
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization,
				},
			}),
		}),
	}),
})

export const { useUserTokenQuery, useUserSessionQuery } = formStateApi
