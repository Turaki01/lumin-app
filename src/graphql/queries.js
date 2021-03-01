import { gql } from '@apollo/client'
import storageService from '../utils/storageService'

export const LOAD_PRODUCTS = gql`
    query {
        products {
        id,
        title,
        image_url,
        price(
            currency: ${storageService.get('cys')}
          )
        }
    }
`

export const LOAD_PRODUCTS_AXIOS = `
    query {
        products {
        id,
        title,
        image_url,
        price(
            currency: ${storageService.get('cys')}
          )
        }
    }
`

export const getProductsAxios = (curr) => {
    return `
        query {
            products {
            id,
            title,
            image_url,
            price(
                currency: ${curr}
            )
            }
        }
    `
}

export const LOAD_CURRENCIES = gql`
    query {
        currency
    }
`