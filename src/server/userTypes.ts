import { IMoviesData } from './moviesTypes';

export interface IUserData {
	id: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	favorites: IMoviesData[];
}
// export interface IUserFavoriteMovieId extends IMoviesData {}