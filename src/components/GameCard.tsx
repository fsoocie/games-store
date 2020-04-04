import { Card, Button } from 'antd';
import React, {FC} from 'react'
import { Game } from '../reducers/games'
const { Meta } = Card

const gridStyle: React.CSSProperties = {
	width: '25%',
	textAlign: 'left',
	backgroundColor: '#f7f2f2'
  };
 
type GameCard =  {
	title:string
	image: string
	price: number
	id: number
	gamesInCart: Array<Game>
	addGameToCart: (id: number) => void
}

let GameCard: FC<GameCard> = ({title, image, price, id, addGameToCart, gamesInCart }) => <Card
    cover={
      <img
        alt = 'game'
		src={image}
		className = 'img-game-item'
      />
    }
    actions={[<Button type='link' onClick= { () => addGameToCart(id) }> Добавить в корзин<i>{ gamesInCart.filter((g) => g.id === id).length === 0? '' : `у (${gamesInCart.filter((g) => g.id === id).length})`}</i> </Button>]}
  >
    <Meta
      title={title }
      description= {price + 'ք'}
    />
  </Card>


export {GameCard, gridStyle}
