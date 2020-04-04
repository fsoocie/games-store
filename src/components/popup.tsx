import React from 'react'
import { List, Avatar, Spin, Button } from 'antd';
import { Game } from '../reducers/games'

type TPopupCart = {
	removeGameFromCart: (id: number) => void
	gamesCart: Array<Game>
}

const PopupCart: React.FC<TPopupCart>= ({gamesCart,removeGameFromCart }) => {

	return(	
		<List
		dataSource={gamesCart.filter(function(item, pos) {
			return gamesCart.indexOf(item) == pos;
		})}
		renderItem={item => (
		<List.Item key={item.id}>
			<List.Item.Meta
			avatar={
				<Avatar src={item.image} />
			}
			title={<a href='#'> {item.title}</a>}
			description={`В корзине: ${gamesCart.filter((el)=> el.title === item.title).length}`}
			/>
			<Button danger className = 'popup-delete' onClick = {() => removeGameFromCart(item.id)}>Удалить</Button>
		</List.Item>
		)}
		>
		{true && false && (
		<div className="demo-loading-container">
			<Spin />
		</div>
		)}
		</List>
	)
}
export {PopupCart}