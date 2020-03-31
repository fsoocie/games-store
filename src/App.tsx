import React from "react";
import './App.css';
import { appProps } from './containers/App'
import { GamesBlock } from './components/GameCard'
import { MainMenu } from './components/Menu'


const App: React.FC<appProps> = ({ games, querySearch, setQuerySearch,sortByHighPrice,sortByLowPrice, sortByName, sortById }) => {

  return (
    <div className="App">
      <MainMenu querySearch = {querySearch} setQuerySearch = {setQuerySearch} sortByHighPrice = {sortByHighPrice} sortByLowPrice = {sortByLowPrice}
      sortByName ={sortByName} sortById = {sortById}/>
      <GamesBlock games = {games}/>
    </div>
  );
}

export default App;
