import React from 'react'
import { useStateValue } from './StateProvider'
import "../Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
/**
* @author
* @function Checkout
**/

const Checkout = (props) => {
    const [{basket}]=useStateValue();
  return(
    <div className="checkout">


        <div className="checkout__left">
     {basket?.length === 0 ? (
        <div>
            <h2>Your basket is empty</h2>

        </div>
     ):(
         <div >
             <h2  className="checkout__title">Your basket</h2>
         {
             basket.map(item=>(
                 <CheckoutProduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 ratings={item.ratings}
                 
                 />
             ))
         }
         </div>
     )
     }

</div>
{basket.length > 0 && (
    <div className="checkout__right">
        <Subtotal />
    </div>
)}

    </div>
   )

 }

export default Checkout