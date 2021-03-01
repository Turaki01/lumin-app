import React, { useEffect, useState } from 'react'
import ListItem from '../../components/list-item/list-item.component'

import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../redux/cart/cart.selector'

import './products.styles.scss'
import { getProductsAxios } from '../../graphql/queries'
import CheckoutSidebar from '../../components/checkout-sidebar/checkout-sidebar.component'
import { connect } from 'react-redux'
import storageService from '../../utils/storageService'
import api from '../../axios/api'
import { selectProductItems } from '../../redux/product/product.selector'

const Products = ({
    hidden,
    products
}) => {

    const [listOfProducts, setListOfProduct] = useState([])

    const getProducts = async () => {
        try {
            let response = await api.getData({

                query: getProductsAxios(storageService.get('cys') ? storageService.get('cys') : 'USD'),
            });

            if (response.data.data) {
                setListOfProduct(response.data.data.products)
            }
        } catch (error) {
            console.error(error.response.data)
        }
    }

    useEffect(() => {
        if (!storageService.get('cys')) {
            storageService.set('cys', 'USD')
        }
        getProducts()
    }, [])

    useEffect(() => {
        setListOfProduct(products)
    }, [products])

    return (
        <div className="products">
            <div className="items">
                {
                    listOfProducts.map((product) =>
                        <ListItem
                            key={product.id}
                            productList={product}
                        />)
                }
            </div>

            { hidden ? null : <CheckoutSidebar />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    products: selectProductItems
})

export default connect(mapStateToProps)(Products)
