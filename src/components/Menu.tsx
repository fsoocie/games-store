import React from 'react'
import { Menu, Input, Layout } from 'antd';
import fireLogo from '../fire-react.svg'
import {
  ShoppingCartOutlined,
  UpOutlined,
  DownOutlined,
  SortAscendingOutlined,
  WifiOutlined

} from '@ant-design/icons';
const { Header } = Layout
const { Search } = Input

type Props = {
	sortByHighPrice: () => void
	sortByLowPrice: () => void
	sortByName: () => void
	sortById: () => void
	setQuerySearch: (querySearch:string) => void
	querySearch: string
}

export class MainMenu extends React.Component<Props>{
	
render(){
	const {sortByLowPrice, sortByHighPrice, sortById, sortByName, setQuerySearch,querySearch} = this.props
	return(
		<div className = 'wrapper-menu'>
			<div className = 'header-wrapper'>
			<Header className="header"> 
					<img src={fireLogo} className='fireLogo' alt ='logo' /> <span className = 'span-name'>Games Store</span> 
					<ShoppingCartOutlined style={{ fontSize: '32px', position: 'absolute', right: '8px', top: '2px' }} />
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
				placeholder="Поиск по книгам.."
				onChange ={(e:React.ChangeEvent<HTMLInputElement>) => setQuerySearch(e.currentTarget.value) }
				value =  {querySearch}
				style={{ width: 200 }}/>
			  </div>
			  </div>
		</div>
	  );
		}
	}
