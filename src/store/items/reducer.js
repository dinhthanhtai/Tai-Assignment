import { ITEM_ADDED, ITEM_PRICE_UPDATE, ITEM_QUANTITY_UPDATE, ITEM_REMOVED } from "../constant";

let id = 1;

const initialItems = [
    {
        uuid: id++,
        name: 'Tofu Roast',
        price: 14, 
        quantity: 1
    },
    {
        uuid: id++,
        name: 'Chicken Fried',
        price: 12, 
        quantity: 1
    }
]

export const reducer = (state = initialItems, action) => {
    const { type, payload } = action;
    switch (type) {
        case ITEM_ADDED:
            const item = { uuid: id++, quantity: 1, ...payload}
            return [...state, item];
        case ITEM_REMOVED:
            return state.filter(item => item.uuid !== payload.uuid);
        case ITEM_PRICE_UPDATE:     
            return state.map(item => {
                if (item.uuid === payload.uuid) {
                  return {...item, price: payload.price}
                }
                return item;
            })
        case ITEM_QUANTITY_UPDATE: 
            return state.map(item => {
                if (item.uuid === payload.uuid) {
                    return {...item, quantity: payload.quantity}
                }
                return item;
            })
        default:
            return state;
    }
}

export default reducer;