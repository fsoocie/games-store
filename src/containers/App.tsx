import React from 'react'
import App from '../App'
import { connect } from 'react-redux'
import { RootState } from '../reducers/rootReducer'
import { setGames, sortByHighPrice, sortByLowPrice, sortByName, sortById, setQuerySearch } from '../actions/gamesActions'
import { Game } from '../reducers/games'
import axios from 'axios'

export type appProps = {
	games: Array<Game>
	isReady: boolean
	setGames: (games: Array<Game>) => void
	sortByLowPrice: () => void
	sortByHighPrice: () => void
	sortByName: () => void
	sortById: () => void
	setQuerySearch: (querySearch:string) => void
	querySearch: string
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

const mapStateToProps = ({games}: RootState) =>({
	isReady: games.isReady,
	games: games.games.filter((g) => g.title.toLowerCase().includes(games.querySearch.toLowerCase()) ),
	querySearch: games.querySearch
})


export default connect(mapStateToProps, { setGames, sortByHighPrice,
										 sortByLowPrice, sortByName, sortById, setQuerySearch })(AppContainer)