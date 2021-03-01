import React from 'react'
import { connect } from 'react-redux'
import { addItemToCart, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions'
import './cart-item-list.styles.scss'

const CartItemList = ({
    cartItem,
    addItemToCart,
    clearItem,
    removeItem,
    title,
    price,
    image_url,
    quantity
}) => {

    return (
        <div className="cart-list">
            <div className="cart-list__header">
                <p>{title}</p>

                <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
            </div>

            <div className="cart-list__body">
                <div></div>

                <div className="cart-list__image">
                    <img src={image_url} alt="cart item" />
                </div>
            </div>

            <div className="cart-list__footer">
                <div className="cart-item__count">
                        <span className="arrow" onClick={() => removeItem(cartItem)}>-</span>
                        <span>{quantity}</span>
                        <span className="arrow" onClick={() => addItemToCart(cartItem)}>+</span>
                </div>

                <div>
                    <p>{price * quantity}</p>
                </div>

                <div></div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CartItemList)
