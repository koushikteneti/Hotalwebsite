import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

    const navigate = useNavigate();
    const calculateSubtotal = () => {
        return food_list.reduce((acc, item) => {
            return acc + (cartItems[item._id] * item.price);
        }, 0);
    };

    const deliveryFee = 2;
    const subtotal = calculateSubtotal();
    const total = subtotal + deliveryFee;

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index}>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>₹{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>₹{item.price * cartItems[item._id]}</p>
                                    <button onClick={() => removeFromCart(item._id)}>Remove</button>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
                <div className="cart-bottom">
                    <div className="cart-total">
                        <h3>Cart Totals</h3>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>₹{getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>₹{getTotalCartAmount()===0?0:2}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                            </div>
                        </div>
                        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
                    </div>
                    <div classname="cart-promocode">
                        <div>
                            <p>If you have a promo code,Enter it here</p>
                            <div className='cart-promocode-input'>
                                <input type="text"placeholder='promo code' />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;