import React from 'react'
import { Link } from 'react-router-dom'
import "../Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "./StateProvider"
import fire from '../firebase'
/**
* @author
* @function Header
**/

const Header = (props) => {
    const login=()=>{
        if(user)
        {
            fire.auth().signOut();
        }

    }
    const [{basket,user}]=useStateValue();
  return(
    <nav className="header">
        {/* logo+image */}
        <Link to="/" >
        <img className="header__logo" 
        src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" 
        
        />
        </Link>
        
     
        {/* search */}
        <div className="header__search" >
        <input type="text" className="header__searchbox" ></input>
        <SearchIcon className="header__icon"></SearchIcon>
        
        </div>
        {/* other links */}
        <div className="header__nav" >
            <Link to={!user &&  "/login"} className="header__link" >
            <div onClick={login} className="header__options" >
                <span className="header__optionline1">Hello,{user?.email}</span>
                <span className="header__optionline2" >{user ? 'Sign Out': "Sign in"}</span>
            </div>               
            </Link>
            <Link to="/login" className="header__link" >
            <div className="header__options" >
                <span className="header__optionline1">Returns</span>
                <span className="header__optionline2">& Orders</span>
            </div>               
            </Link>
            <Link to="/login" className="header__link" >
            <div className="header__options" >
                <span className="header__optionline1">Your</span>
                <span className="header__optionline2">Prime</span>
            </div>               
            </Link>

            <Link to="/checkout">
                <div className="header__basket">
                    <ShoppingBasketIcon />
                    <span className="header__optionline2 header__basketcount">{basket?.length}</span>

                </div>
            </Link>


        </div>

    </nav>
   )

 }

export default Header