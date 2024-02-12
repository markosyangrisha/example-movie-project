import { FC } from 'react'
import ReactPaginate from 'react-paginate'

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
			onPageChange={changePageHandler}
			forcePage={current - 1}
			pageRangeDisplayed={5}
			pageCount={pageCount}
			nextLabel='>'
			previousLabel='<'
			renderOnZeroPageCount={null}
			breakLabel='...'
			containerClassName='flex gap-2 my-5 text-end justify-end items-center'
			activeClassName='border rounded-md text-blue-400 bg-white border-blue-500'
			pageClassName='transition-all duration-200 rounded-md cursor-pointer text-center hover:bg-gray-200'
			activeLinkClassName='font-bold'
			pageLinkClassName='block w-[30px] h-[30px] leading-[30px] text-sm'
			nextClassName='rounded-md cursor-pointer w-[30px] h-[30px] text-center hover:bg-gray-200'
			nextLinkClassName='block w-[30px] h-[30px] leading-[30px] text-sm'
			previousClassName='rounded-md cursor-pointer w-[30px] h-[30px] text-center hover:bg-gray-200'
			previousLinkClassName='block w-[30px] h-[30px] leading-[30px] text-sm'
		/>
	)
}

export default Pagination
