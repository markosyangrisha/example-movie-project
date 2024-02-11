import { FC } from 'react'
import './ThisGenreMovies.css'
import { useParams } from 'react-router-dom'

const ThisGenreMovies: FC = () => {
	const { id } = useParams<'id'>()

	

	return <div>ThisGenreMovies</div>
}

export default ThisGenreMovies
