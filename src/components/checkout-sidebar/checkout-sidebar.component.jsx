import React, { useEffect, useState } from 'react'
import './checkout-sidebar.styles.scss'

import { ReactComponent as RightArrow } from '../../assets/img/right-arrow.svg';
import CurrencySelect from '../currency-select/currency-select.components';
import { toggleCartHidden, updateCartItem } from '../../redux/cart/cart.actions';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartItemList from '../cart-item-list/cart-item-list.component';

import CustomButton from '../custom-button/custom-button.component'
import api from '../../axios/api'
import { getProductsAxios } from '../../graphql/queries';
import storageService from '../../utils/storageService';
import { addItemToProducts } from '../../redux/product/product.actions';
import utilFn from '../../utils/utilFn';

const CheckoutSidebar = ({
    toggleCartHidden,
    cartItems,
    total,
    addItemToProducts,
    updateCartItem
}) => {

    const [items, setItems] = useState([])

    const getProducts = async () => {
        try {
            let response = await api.getData({
                query: getProductsAxios(storageService.get('cys')),
            });

            addItemToProducts(response.data.data.products)
            let newCartItems = utilFn.refreshCartItems(response.data.data.products, cartItems)
            updateCartItem(newCartItems)
            setItems(newCartItems)
        } catch (error) {
            console.error(error)
        }
    }

    const changeCurrency = (e) => {
        if (e) {
            const { value } = e.target
            storageService.set('cys', value)
            getProducts()
        }
    }

    useEffect(() => {
        setItems(cartItems)
    }, [cartItems])

    return (
        <div className="checkout">
            <div className="checkout-overlay">
                <div className="sidenav sidenav-open cart-parent__div">
                    <div>
                        <div className="cart-header">
                            <div className="nav-arrow__div" onClick={toggleCartHidden}>
                                <RightArrow />
                            </div>
                            <p>YOUR CART</p>
                            <div></div>
                        </div>

                        <div className="cart-currency__div">
                            <CurrencySelect
                                changeCurrency={changeCurrency}
                            />
                        </div>
                    </div>

                    <div className="cart-body">
                        {
                            items.length ? items.map((cartItem) => <CartItemList quantity={cartItem.quantity} title={cartItem.title} price={cartItem.price} cartItem={cartItem} image_url={cartItem.image_url} key={cartItem.id} />) : <span className="empty-message">Your cart is empty</span>
                        }
                    </div>

                    <div className="cart-footer">
                        <div className="subtotal-div">
                            <p>Subtotal</p>

                            <p>{total}</p>
                        </div>

                        <CustomButton inverted>
                            MAKE THIS SUBSCRIPTION (SAVE 20%)
                        </CustomButton>

                        <div style={{ marginBottom: '20px' }}></div>

                        <CustomButton>
                            PROCEED TO CHECKOUT
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    addItemToProducts: products => dispatch(addItemToProducts(products)),
    updateCartItem: item => dispatch(updateCartItem(item))
})

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSidebar)
