import { createSelector } from 'reselect'

const selectProduct = state => state.products

export const selectProductItems = createSelector(
    [selectProduct],
    products => products.listOfProducts
)