import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { Icons } from '../../widgets/icons'
import './BurgerMenu.css'
import { useFetchGenresQuery } from '../../store/slices/genresServerAPI'
import { useExactlyGenres } from '../../hooks/exactlyGenres';

const BurgerMenu: FC = () => {
	const { openBurgerMenuHandler, openDropdownList } = useActions()
	const { isOpenBurgerMenu, isOpenDropdownList } = useAppSelector(
		state => state.burgerMenu
		)
		const { data } = useFetchGenresQuery(null)
		const {thatGenreMovies} = useExactlyGenres()
		
		return (
			<>
				{
					<div
						style={{ translate: `${isOpenBurgerMenu ? '300px' : ''}` }}
						className='burger-menu .active-burger__menu'
					>
						<div className='burger-menu_inner'>
							<Icons.Close
								onClick={() => openBurgerMenuHandler(false)}
								className='burger-close__icon'
							/>
							<NavLink className='burger-menu__icon' to='/'>
								<Icons.Home className='burger-menu__home-icon' />
								<span>Home</span>
							</NavLink>
							<div
								onClick={() => openDropdownList()}
								className={`burger-menu__icon burger_menu-genres__list ${
									isOpenDropdownList ? 'active-burger__menu-icon' : ''
								}`}
							>
								<Icons.Genres className='burger-menu__genres-icon' />
								<div className='burger-genres__dropdown'>
									<span>Genres</span>
									<ul
										className={`burger-genres__dropdown-list ${
											isOpenDropdownList ? 'active-dropdown__list' : ''
										}`}
									>
										{data?.genres.map(genre => (
											<li onClick={() => thatGenreMovies(genre.id)} key={genre.id}>
												{genre.name}
											</li>
										))}
									</ul>
								</div>
							</div>
							<NavLink className='burger-menu__icon' to='/bookmarks'>
								<Icons.BookMark className='burger-menu__bookmark-icon' />
								<span>Bookmarks</span>
							</NavLink>
						</div>
					</div>
				}
			</>
		)
}

export default BurgerMenu
