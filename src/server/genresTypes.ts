export interface IGenresData {
	id: number
	name: string
}

export interface IGenresServerResponse {
	genres: IGenresData[]
}
