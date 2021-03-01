import React from 'react'
import { connect } from 'react-redux'
import { addItemToCart, toggleCartHidden } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.component'
import './list-item.styles.scss'

const ListItem = ({
    productList,
    addItemToCart,
    toggleCartHidden
}) => {
    return (
        <div className="list-item">
            <div
                className='image'
                style={{
                    backgroundImage: `url(${productList?.image_url})`
                }}
            />
            <div className='list-item__footer'>
                <p className='name'>{productList?.title}</p>
                <p className='price'>From {productList?.price}</p>
            </div>

            <div onClick={toggleCartHidden}>
                <CustomButton onClick={() => addItemToCart(productList)}>Add to Cart</CustomButton>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: product => dispatch(addItemToCart(product)),
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(ListItem)
