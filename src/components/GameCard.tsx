import { Card } from 'antd';
import React, {FC} from 'react'
import { Game } from '../reducers/games'
const { Meta } = Card

const gridStyle: React.CSSProperties = {
	width: '25%',
	textAlign: 'left',
	backgroundColor: '#f7f2f2'
  };

type GameCard = {
	title:string
	image: string
	price: number
}

const GameCard: FC<GameCard> = ({title, image, price}) => <Card
    cover={
      <img
        alt = 'game'
		src={image}
		className = 'img-game-item'
      />
    }
    actions={[<span onClick= {alert.bind(window, 123)}> Добавить в корзину </span>]}
  >
    <Meta
      title={title }
      description= {price + 'ք'}
    />
  </Card>


type GamesBlock = {
	games: Array<Game> 
}
const GamesBlock: FC<GamesBlock> = ({games}) =>{
	return(
	<div>
	{games.length === 0? <div>Загрузка...</div>: games.map((g) => <Card.Grid key = {g.title} style={gridStyle}><GameCard price={g.price} title={g.title} image = {g.image}/></Card.Grid> )}
	</div>
	)
}
export {GameCard, GamesBlock}