import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.css'

interface IPaginationProps {
	current: number
	pageCount: number
	changePageHandler: ({ selected }: { selected: number }) => void
}

const Pagination: FC<IPaginationProps> = ({
	current,
	changePageHandler,
	pageCount,
}) => {
	return (
		<ReactPaginate
			className='pagination-container'
			onPageChange={changePageHandler}
			forcePage={current - 1}
			pageRangeDisplayed={5}
			pageCount={pageCount}
			nextLabel='>'
			previousLabel='<'
			renderOnZeroPageCount={null}
			breakLabel='...'
			containerClassName='pagination-container'
			activeClassName='pagination-active'
			pageClassName='pagination-page'
			activeLinkClassName='pagination-active__link'
			pageLinkClassName='pagination-page__link'
			nextClassName='pagination-next'
			nextLinkClassName='pagination-next__link'
			previousClassName='pagination-prev'
			previousLinkClassName='pagination-prev__link'
		/>
	)
}

export default Pagination
