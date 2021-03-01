import ProductActionType from "./product.types";

const INITIAL_STATE = {
    listOfProducts: []
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductActionType.ADD_ITEM:
            return {
                ...state,
                listOfProducts: [...action.payload]
            }
    
        default:
            return state
    }
}

export default productReducer