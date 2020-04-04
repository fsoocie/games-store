import React from 'react'
import App from '../App'
import { connect } from 'react-redux'
import { RootState } from '../reducers/rootReducer'
import { setGames, sortByHighPrice, sortByLowPrice, sortByName, sortById, setQuerySearch } from '../actions/gamesActions'
import { Game } from '../reducers/games'
import { removeGameFromCart } from '../actions/cartActions' 
import axios from 'axios'

export type appProps = {
	games: Array<Game> | null
	isReady: boolean
	setGames: (games: Array<Game>) => void
	sortByLowPrice: () => void
	sortByHighPrice: () => void
	sortByName: () => void
	sortById: () => void
	setQuerySearch: (querySearch:string) => void
	querySearch: string
	totalCount: number
	gamesCart: Array<Game>
	totalItems: number
	removeGameFromCart: (id:number) => void
}

class AppContainer extends React.Component<appProps>{
	

	componentWillMount(){
		const {setGames} = this.props
		axios.get<Array<Game>>('http://localhost:3000/gamesList.json').then( response => {
			setGames(response.data)
		})
	}

	render(){
		return(
			<App {...this.props}/>
		)
	}
}

const mapStateToProps = ({games, cart}: RootState) =>({
	isReady: games.isReady,
	games: games.games?games.games!.filter((g) => g.title.toLowerCase().includes(games.querySearch.toLowerCase())) : null,
	querySearch: games.querySearch,
	totalCount: cart.games.reduce((acc,el) => acc+el.price, 0),
	gamesCart: cart.games,
	totalItems: cart.games.length

})


export default connect(mapStateToProps, { setGames, sortByHighPrice,
										 sortByLowPrice, sortByName, sortById, setQuerySearch, removeGameFromCart })(AppContainer)