import React from 'react'
import { Menu, Input, Layout } from 'antd';
import fireLogo from '../fire-react.svg'
import { Popover, Button } from 'antd';
import { Game } from '../reducers/games'
import {
  ShoppingCartOutlined,
  UpOutlined,
  DownOutlined,
  SortAscendingOutlined,
  WifiOutlined

} from '@ant-design/icons';
import {PopupCart} from './popup'
const { Header } = Layout
const { Search } = Input

type Props = {
	sortByHighPrice: () => void
	sortByLowPrice: () => void
	sortByName: () => void
	sortById: () => void
	setQuerySearch: (querySearch:string) => void
	removeGameFromCart: (id: number) => void
	querySearch: string
	totalCount: number
	games: Array<Game>
	gamesCart: Array<Game>
	totalItems: number
}


export class MainMenu extends React.Component<Props>{
	
render(){
	const {sortByLowPrice, removeGameFromCart, totalItems, sortByHighPrice, sortById, sortByName, setQuerySearch,querySearch, totalCount, gamesCart} = this.props
	return(
		<div className = 'wrapper-menu'>
			<div className = 'header-wrapper'>
			<Header className="header"> 
					<img src={fireLogo} className='fireLogo' alt ='logo' /> <span className = 'span-name'>Games Store</span>
					<Button type="link" size = 'large' ghost className = 'lastPrice'> Итого: {totalCount} руб. </Button>
					<Popover placement="bottomRight" title={'Выбранные игры:'} content={<PopupCart gamesCart={gamesCart} removeGameFromCart = {removeGameFromCart}/>} trigger="hover">
	<Button type="link" size = 'large' className = 'cartButton'> <span ><ShoppingCartOutlined/> Корзина ({totalItems}) </span> </Button>
      				</Popover>
			</Header>
			</div>

			<div>
			<div className = 'wrapper-sections'>
				<Menu mode="horizontal">
				<Menu.Item key="all" onClick = {sortById}>
					<WifiOutlined />
					Все
				</Menu.Item>

				<Menu.Item key="price_max" onClick = {sortByHighPrice} >
					<UpOutlined />
					По возрастанию цены..
				</Menu.Item>

				<Menu.Item key="price_min" onClick = {sortByLowPrice}>
					<DownOutlined />
					По убыванию цены..
				</Menu.Item>

				<Menu.Item key="title" onClick = {sortByName}>
					<SortAscendingOutlined />
					По названию..
				</Menu.Item>
				
				</Menu>
			</div>
			<div className='wrapper-search'>
				<Search
				placeholder="Поиск по играм.."
				onChange ={(e:React.ChangeEvent<HTMLInputElement>) => setQuerySearch(e.currentTarget.value) }
				value =  {querySearch}
				style={{ width: 200 }}/>
			  </div>
			  </div>
		</div>
	  );
		}
	}
