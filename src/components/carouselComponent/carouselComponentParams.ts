import { URL_TOP_RATED, URL_POPULAR, URL_UPCOMING } from '../../server/params'


interface ICarouselComponentParams {
	id: number
	url: string
	categoryTitle: string
}

export const carouselComponentParams: ICarouselComponentParams[] = [
	{
		id: 1,
		url: URL_POPULAR,
		categoryTitle: 'Popular movies',
	},
	{
		id: 2,
		url: URL_TOP_RATED,
		categoryTitle: 'Top rated movies',
	},
	{
		id: 3,
		url: URL_UPCOMING,
		categoryTitle: 'Upcoming movies',
	},
]