const utilFn = {
    refreshCartItems(products, cart) {
        const mappedProduct = products.map((item) => item.id) 

        for (let index = 0; index < cart.length; index++) {
            if(mappedProduct.includes(cart[index].id)) {
                let i = mappedProduct.indexOf(cart[index].id)
                cart[index].price = products[i].price
            }
        }

        return cart
    }
}

export default utilFn