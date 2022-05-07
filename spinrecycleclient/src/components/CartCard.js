import React from 'react'
import { deleteCartItem } from '../data/cartData'


export default function CartCard({ cart, setCart }) {
    const handleClick = (method) => {
        if (method === 'delete') {
            deleteCartItem(cart).then(setCart);
        }
    };

  return (
    <div className="cartCard">
        <div className="cartCard-body">
            <h5 className="cartCard-title">{cart.title}</h5>
            <p className="cartCard-artist">{cart.artist}</p>
            <p className="cartCard-genre">{cart.genre}</p>
            <p className="cartCard-price">{cart.price}</p>
        </div>
        <div className="cartCard-buttons">
            <button
                onClick={() => handleClick('delete')}
                className="btn btn-danger"
                type="button"
                >
                    Delete
                </button>
        </div>
    </div>
  )
}
