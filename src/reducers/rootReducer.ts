import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { games, GamesState } from '../reducers/games'
import { GamesActionTypes, } from '../actions/gamesActions'
import thunk from 'redux-thunk'

export type RootState = {
	games: GamesState
  }
type RootAction = GamesActionTypes

const rootReducer = combineReducers<RootState, RootAction>({
	games
  });

export let store = createStore(rootReducer, applyMiddleware(thunk))
