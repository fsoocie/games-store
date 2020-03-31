import { Game } from '../reducers/games'

export const setGames = (games: Array<Game>) => ({
	type: 'SET_GAMES',
	payload: {games, isReady:true}
})

type setGameAction = {
	type: 'SET_GAMES'
	payload: {
		games: Array<Game>
		isReady: boolean
	}
} 

export const sortByHighPrice = ():sortByHighPriceType => ({
	type: 'SORT_BY_HIGHT_PRICE'
})
type sortByHighPriceType = {type: 'SORT_BY_HIGHT_PRICE'}

export const sortByLowPrice = ():sortByLowPriceType => ({
	type: 'SORT_BY_LOW_PRICE'
})
type sortByLowPriceType = {type: 'SORT_BY_LOW_PRICE'}

export const sortByName = ():sortByNameType => ({
	type: 'SORT_BY_NAME'
})
type sortByNameType = {type: 'SORT_BY_NAME'}

export const sortById = ():sortByIdType => ({
	type: 'SORT_BY_ID'
})
type sortByIdType = {type: 'SORT_BY_ID'}

export const setQuerySearch = (querySearch: string): setQuerySearchType => ({
	type: 'SET_QUERY_SEARCH',
	payload:{querySearch}
})
type setQuerySearchType = {type: 'SET_QUERY_SEARCH' , payload:{querySearch: string}}




export type GamesActionTypes = setGameAction | sortByHighPriceType |
 sortByLowPriceType | sortByNameType  | sortByIdType | setQuerySearchType