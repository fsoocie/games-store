import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../reducers/rootReducer'
import { Game } from '../reducers/games'
import {GameCard} from '../components/GameCard'
import { addGameToCart } from '../actions/cartActions'
import { store } from '../reducers/rootReducer'

export type TGameCardContainer = {
	title:string
	image: string
	price: number
	id: number
	gamesInCart: Array<Game>
	addGameToCart: (id: number) => void
}

class GameCardContainer extends React.Component<TGameCardContainer>{
	render(){
		return(
			<GameCard {...this.props}/>
		)
	}
}

const mapStateToProps = ({cart}: RootState) =>({
	gamesInCart: cart.games,
})
const mapDispatchToProps = (dispatch:any) => {
	let rootState = store.getState()
	return {
		addGameToCart: (id: number) => {	
		dispatch(addGameToCart(id, rootState))
	  }
	}
  }


export default connect(mapStateToProps, mapDispatchToProps)(GameCardContainer)