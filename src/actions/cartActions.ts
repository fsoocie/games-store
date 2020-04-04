
export const addGameToCart = (id:number, rootState: any):TAddGameToCart => ({
	type: 'ADD_GAME_TO_CART', id, rootState
})

export const removeGameFromCart = (id:number): TRemoveGameFromCart =>({
	type: 'DELETE_GAME_FROM_CART', id
})

type TRemoveGameFromCart = {type: 'DELETE_GAME_FROM_CART', id: number }
type TAddGameToCart = {type: 'ADD_GAME_TO_CART', id: number, rootState:any}

export type cartActionsTypes = TAddGameToCart | TRemoveGameFromCart