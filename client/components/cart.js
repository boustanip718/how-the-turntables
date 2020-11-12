import React from 'react'
import {connect} from 'react-redux'
import {getCart, removeItemFromCart} from '../store'
import CartItem from './cart-item'

/**
 * COMPONENT
 */
class Cart extends React.Component {
  constructor() {
    super()
    this.removeItem = this.removeItem.bind(this)
  }

  componentDidMount() {
    this.props.getCart()
  }

  async removeItem(id) {
    await this.props.removeItemFromCart(id)
  }

  render() {
    return (
      <div>
        <h1>Your Cart:</h1>
        {this.props.cart.map((item, idx) => {
          return (
            <CartItem
              key={idx}
              id={item.id}
              title={item.title}
              artistName={item.artistName}
              imageUrl={item.imageUrl}
              price={item.price}
              amount={item.amount}
              removeItem={this.removeItem}
            />
          )
        })}
        <button type="submit" onClick={() => console.log('Buy Now')}>
          Buy Now
        </button>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getCart: () => dispatch(getCart()),
    removeItemFromCart: (id) => dispatch(removeItemFromCart(id)),
  }
}

export default connect(mapState, mapDispatch)(Cart)
