import { GamesActionTypes } from '../actions/gamesActions'
import * as _ from 'lodash'

export type Game = {
title: string,
image: string,
price: number,
company: string,
rating: number}

export type GamesState = {
	games: Array<Game> 
	isReady:boolean
	querySearch: string
}
const initialState: GamesState = {
	games: [],
	isReady:false,
	querySearch: ''
}

const sortBy = {
	low_price(list: Array<Game>){
		return _.orderBy(list, 'price', 'asc') 
	},
	high_price(list: Array<Game>){
		return _.orderBy(list, 'price', 'desc') 
	},
	name(list: Array<Game>) {
		 return _.orderBy(list, 'title', 'asc')
	},
	id(list: Array<Game>) {
		return _.orderBy(list, 'id', 'asc')
   }
}


export function games(state: GamesState = initialState, action: GamesActionTypes): GamesState {
	
	switch(action.type) {
		case 'SET_GAMES': 
		return {
			...state, ...action.payload
		};
		case 'SORT_BY_HIGHT_PRICE': 		
		return {
			...state, games: sortBy.high_price(state.games)
		};
		case 'SORT_BY_LOW_PRICE': 
		return {
			...state, games: sortBy.low_price(state.games)
		};
		case 'SORT_BY_NAME':
			return{
				...state,games: sortBy.name(state.games)
		};
		case 'SORT_BY_ID':
			return{
				...state,games: sortBy.id(state.games)
		};
		case 'SET_QUERY_SEARCH':
			return{
				...state, ...action.payload
		};
		default: 
		return state
	}
}