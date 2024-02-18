export interface IUserToken {
	success: boolean
	expires_at: string
	request_token: string
} 

export interface IUserSession {
	success: boolean
	expires_at: string
	guest_session_id: string
}