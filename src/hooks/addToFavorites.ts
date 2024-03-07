import { IMoviesData } from '../server/moviesTypes';
import { IUserData } from '../server/userTypes';
import { usePostFavoriteMutation, useRemoveFavoriteMoviesMutation } from '../store/slices/userStateSlice/fetchFavoritesApi';
import { selectUserData } from '../store/slices/userStateSlice/userStateSelector';
import { useLazyGetUserDataRegisterByIdQuery } from '../store/slices/userStateSlice/usersStateApi';
import { useAppSelector } from './redux';

export const useAddToFavorites = () => {
	const user = useAppSelector(selectUserData);
	const [addTooFavorites] = usePostFavoriteMutation();
	const [removeInFavorites] = useRemoveFavoriteMoviesMutation();
	const [getUserById] = useLazyGetUserDataRegisterByIdQuery();

	const addToFavoritesList = async (findMovie: IMoviesData) => {
		if (!user) return;

		try {
			const { data: userData, isError: errorUserId } = await getUserById(user?.id);

			if (errorUserId) throw new Error('No user with this ID found');
			
			const existingFavoritesId = userData?.favorites?.find(favoriteMovie => favoriteMovie?.id === findMovie?.id);

			if (existingFavoritesId) {
				const newFavorites = userData?.favorites?.filter(favoriteMovie => favoriteMovie?.id !== findMovie?.id);

				const removeFavorites: IUserData = {
					...userData,
					favorites: newFavorites,
				};

				const response = await removeInFavorites({
					id: user.id,
					body: removeFavorites,
				});

				if ('error' in response) throw new Error('Error: an error occurred when deleting a favorites');

				return;
			}

			const newFavorites: IUserData = {
				...userData,
				favorites: [...(userData?.favorites ?? []), findMovie],
			};

			const response = await addTooFavorites({
				id: user.id,
				body: newFavorites,
			});

			if ('error' in response) throw new Error('Error: an error occurred while adding to the favorites');
		} catch (error) {
			console.log(error);
		}
	};
	return {
		addToFavoritesList,
	};
};
