import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useExactlyGenres } from '../../hooks/exactlyGenres'
import { BASE_IMAGE_URL } from '../../server/server'
import { useFetchMovieDetailsQuery } from '../../store/slices/fetchMovieDetails'
import { Icons } from '../../widgets/icons'
import './MovieDetails.css'

const MovieDetails: FC = () => {
	const { id } = useParams<'id'>()
	const { data, isError, isLoading } = useFetchMovieDetailsQuery(id || '')
	const { thatGenreMovies } = useExactlyGenres()

	return (
		<>
			{isError && <p>Error</p>}
			{isLoading && <p>Loading...</p>}
			<div className='movie-details'>
				<div className='movie-details_card'>
					{/* movie-details__card-img */}
					<div className='movie-details__card-img'>
						<img
							src={`${BASE_IMAGE_URL}${data?.poster_path}`}
							alt={data?.title}
						/>
						<Icons.BookMark />
					</div>
					{/* movie-details__card-img */}

					{/*  movie-details__card-info */}
					<ul className='movie-details__card-info'>
						<li>
							<span>Rating:</span> <span>{data?.title}</span>
						</li>
						<li>
							<span>Vote average:</span> <span>{data?.vote_average}</span>
						</li>
						<li>
							<span>Date:</span> <span>{data?.release_date}</span>
						</li>
						<li>
							<span>Countries:</span>
							<span className='movie-details__card-inner__list'>
								<ul>
									{data?.production_countries.map(country => (
										<li key={country.iso_3166_1}>{country.name}</li>
									))}
								</ul>
							</span>
						</li>
						<li>
							<span>Genres:</span>
							<span className='movie-details__card-inner__list'>
								<ul>
									{data?.genres.map(genre => (
										<li
											onClick={() => thatGenreMovies(genre.id)}
											key={genre.id}
										>
											{genre.name}
										</li>
									))}
								</ul>
							</span>
						</li>
						<li>
							<span>Runtime:</span> <span>Minutes / {data?.runtime}</span>
						</li>
						<li>
							<span>Translation:</span>
							<span className='movie-details__card-inner__list'>
								<ul>
									{data?.spoken_languages.map(language => (
										<li key={language.english_name}>{language.english_name}</li>
									))}
								</ul>
							</span>
						</li>

						<li>
							<span>Collection:</span>
							<span>
								{data?.belongs_to_collection
									? data.belongs_to_collection.name
									: ''}
							</span>
						</li>
						<li>
							{data?.adult && (
								<>
									<span>Age:</span> <span>18+</span>
								</>
							)}
						</li>
					</ul>
					{/*  movie-details__card-info */}
				</div>
				<div className='movie-details_card-overview'>
					<h3>What is the movie {data?.title} about?</h3>
					<p>{data?.overview}</p>
				</div>
			</div>
		</>
	)
}

export default MovieDetails
