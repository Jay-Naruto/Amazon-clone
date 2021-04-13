import React from 'react'
import "../Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from '../reducer'
/**
* @author
* @function Subtotal
**/

const Subtotal = (props) => {
    const [{basket,count},dispatch]=useStateValue();
  return(
    <div className="subtotal" >
        <CurrencyFormat 
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"Rs"}
        
        renderText={(value)=>(
            <>
            <p>
                Subtotal ({basket.length} items): <strong>{count}</strong>
            </p>
            <small className="subtotal__gift" >
                <input type="checkbox" />This order contains a gift
                            
            </small>
            </>
        )}
        
        />
        <button>Proceed to checkout</button>
        
    </div>
   )

 }

export default Subtotal