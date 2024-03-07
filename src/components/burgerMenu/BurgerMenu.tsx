import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useActions } from '../../hooks/actions';
import { useExactlyGenres } from '../../hooks/exactlyGenres';
import { useAppSelector } from '../../hooks/redux';
import { selectIsOpenBurgerMenu, selectIsOpenDropdownList } from '../../store/slices/burgerMenuSlice/burgerMenuSliceSelect';
import { useFetchGenresQuery } from '../../store/slices/genresList/fetchGenresApi';
import { Icons } from '../../widgets/icons';
import './BurgerMenu.css';

const BurgerMenu: FC = () => {
	const { openBurgerMenuHandler, openDropdownList } = useActions();
	const isOpenBurgerMenu = useAppSelector(selectIsOpenBurgerMenu);
	const isOpenDropdownList = useAppSelector(selectIsOpenDropdownList);
	const { data } = useFetchGenresQuery();
	const { thatGenreMovies } = useExactlyGenres();

	isOpenBurgerMenu ? document.body.classList.add('stop-scroll') : document.body.classList.remove('stop-scroll');

	return (
		<>
			{
				<div style={{ translate: `${isOpenBurgerMenu ? '300px' : ''}` }} className='burger-menu .active-burger__menu'>
					<div className='burger-menu_inner'>
						<Icons.Close onClick={() => openBurgerMenuHandler(false)} className='burger-close__icon' />
						<NavLink className='burger-menu__icon' to='/'>
							<Icons.Home className='burger-menu__home-icon' />
							<span>Home</span>
						</NavLink>
						<div onClick={() => openDropdownList()} className={`burger-menu__icon burger_menu-genres__list ${isOpenDropdownList ? 'active-burger__menu-icon' : ''}`}>
							<Icons.Genres className='burger-menu__genres-icon' />
							<div className='burger-genres__dropdown'>
								<span>Genres</span>
								<ul className={`burger-genres__dropdown-list ${isOpenDropdownList ? 'active-dropdown__list' : ''}`}>
									{data?.genres.map(genre => (
										<li onClick={() => thatGenreMovies(genre.id)} key={genre.id}>
											{genre.name}
										</li>
									))}
								</ul>
							</div>
						</div>
						<NavLink className='burger-menu__icon' to='/favorites'>
							<Icons.Favorites className='burger-menu__favorites-icon' />
							<span>Favorites</span>
						</NavLink>
					</div>
				</div>
			}
		</>
	);
};

export default BurgerMenu;
