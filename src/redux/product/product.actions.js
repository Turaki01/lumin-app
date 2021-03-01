import ProductActionType from "./product.types";

export const addItemToProducts = item => ({
    type: ProductActionType.ADD_ITEM,
    payload: item
})