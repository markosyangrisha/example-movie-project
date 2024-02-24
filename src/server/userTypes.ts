export interface IUserData {
	id: string
	username: string
	email: string
	password: string
	confirmPassword: string
	bookmark: IUserBookMarkMovieId[]
}

export interface IUserBookMarkMovieId {
	movieId: number
	isAddBookMark: boolean
}
