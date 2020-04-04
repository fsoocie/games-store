import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { games, GamesState } from '../reducers/games'
import thunk from 'redux-thunk'
import { cart, TCartState } from '../reducers/cart'


export type RootState = {
	games: GamesState
	cart:  TCartState
}


const rootReducer = combineReducers<RootState>({
	games, cart
});

export let store = createStore(rootReducer, applyMiddleware(thunk))
