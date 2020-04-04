import React from "react";
import './App.css';
import { appProps } from './containers/App'
import { Card } from 'antd';
import { MainMenu } from './components/Menu'
import GameCardContainer from './containers/GameCard'
import { gridStyle } from './components/GameCard'

const App: React.FC<appProps> = ({ games, removeGameFromCart, querySearch,totalItems, totalCount, setQuerySearch,sortByHighPrice,sortByLowPrice, sortByName, sortById, gamesCart }) => {

  return (
    <div className="App">
      <MainMenu querySearch = {querySearch} setQuerySearch = {setQuerySearch} sortByHighPrice = {sortByHighPrice} sortByLowPrice = {sortByLowPrice}
      sortByName ={sortByName} totalItems = {totalItems} sortById = {sortById} totalCount = {totalCount} games = {games!} gamesCart = {gamesCart} removeGameFromCart = {removeGameFromCart}/>
      <div>
      {!games ? <div>Загрузка...</div> : games!.map((g) => <Card.Grid key = {g.title} style={gridStyle}><GameCardContainer price={g.price} id = {g.id} title={g.title} image = {g.image}/></Card.Grid> )}
      </div>
    </div>
  );
}

export default App;
