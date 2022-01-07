import { ITEM_ADDED, ITEM_REMOVED, ITEM_PRICE_UPDATE, ITEM_QUANTITY_UPDATE } from "../constant";

export const addNewItem = (name, price) => ({
    type: ITEM_ADDED,
    payload: {
        name,
        price
    }
})

export const removeItem = (uuid) => ({
    type: ITEM_REMOVED,
    payload: {
        uuid
    }
})

export const updatePrice = (uuid, price) => ({
    type: ITEM_PRICE_UPDATE,
    payload: {
        uuid,
        price
    }
})

export const updateQuantity = (uuid, quantity) => ({
    type: ITEM_QUANTITY_UPDATE,
    payload: {
        uuid,
        quantity
    }
})