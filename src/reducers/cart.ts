import { Game } from '../reducers/games'


let initialState = {
	games: [] as Array<Game>
}
export type TCartState = typeof initialState


export function cart(state: TCartState = initialState, action: any): TCartState {
	switch(action.type) {
		case 'ADD_GAME_TO_CART': 
		return {
			...state, games: [...state.games, ...action.rootState.games.games.filter((g: any) => g.id === action.id) ]
		};
		case 'DELETE_GAME_FROM_CART':
			const index = state.games.findIndex((el) => el.id === action.id)
			state.games.splice(index, 1)
			return{
				...state, games: [...state.games]
		};
		default: 
		return state
	}
}