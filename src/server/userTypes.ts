export interface IUserData {
	id: string
	username: string
	email: string
	password: string
	confirmPassword: string
	favorites: IUserFavoriteMovieId[]
}

export interface IUserFavoriteMovieId {
	movieId: number
	isAddToFavorites: boolean
}
