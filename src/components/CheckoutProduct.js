import React from 'react'
import "../CheckoutProduct.css"
import { useStateValue } from './StateProvider'
/**
* @author
* @function CheckoutProduct
**/

const CheckoutProduct = ({id,title,image,price,ratings}) => {
 const [{basket,count},dispatch]=useStateValue();

 
  const RemoveFromBasket=()=>{
dispatch({
  type:"REMOVE_FROM_BASKET",
  id:id,

})
dispatch({
  type:'COUNT',
  count:count-price
})
 }
  return(
    <div className="checkoutProducts" >
        <img className="checkoutProducts__image"  src={image} />
        
        <div className="checkoutProducts__info">
            <p className="checkoutProducts__title">{title}</p>
            <p className="checkoutProducts__price">
                <small>Rs</small>
                <strong>{price}</strong>
                
                </p>
         <div className="checkoutProducts__ratings">
          {Array(ratings)
            .fill()
            .map((_,i) => (
              <p>*</p>
            ))}
        </div>
        <button onClick={RemoveFromBasket} >Remove from basket</button>


        </div>
        
    </div>
   )

 }

export default CheckoutProduct