import React from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';



function Checkout() {
    // eslint-disable-next-line no-unused-vars
    const[{ basket }] = useStateValue();

  return <div className="checkout">
   <div className="checkout__left">
   <img className="checkout__add" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="add" />
      {basket?.length === 0 ? (
        <div>
            <h2>Your cart is empty</h2>
            <p>You have no items in your cart . Click "Add to Basket" next to the item</p>
        </div>
      ) : (
        <div>
            <h2 className="checkout__title">Your cart</h2>
            {basket?.map((item) =>(
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
            ))}

            
        </div>
      )}
    </div>
        <div className="checkout__right">
            <h1>Subtotal</h1>
            <Subtotal/>
            
        </div>
   </div>
  
}

export default Checkout
