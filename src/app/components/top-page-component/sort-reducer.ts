import { IProduct } from "@/app/interfaces/product.interface"
import { SORT_VARIANT } from "../sort/sort.enum"

export type SortActions = {type: SORT_VARIANT.PRICE} | {type: SORT_VARIANT.RATING}

export interface ISortReducerState {
    sort: SORT_VARIANT,
    products: IProduct[],
}

export const sortReducer = (state: ISortReducerState, action:SortActions): ISortReducerState => {
  switch(action.type) {
    case SORT_VARIANT.RATING: return {
        sort: SORT_VARIANT.RATING,
        products: state.products.sort((a,b) => a.initialRating > b.initialRating ? -1 : 1)
    }
    case SORT_VARIANT.PRICE: return {
        sort: SORT_VARIANT.PRICE,
        products: state.products.sort((a,b) => a.price > b.price ? 1: -1)
    }
    default: return state
  }  
}