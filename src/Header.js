import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {

    const[{ basket, user }] =  useStateValue();
    const login = () =>{
        if(user) {
            auth.signOut();
        }
    }
  return <nav className="header">
    <Link to="/">
    
   
    {/*logo*/}
    <img className="header__logo" src="https://i.mscwlns.co/mosaic-wellness/image/upload/v1631545166/Man%20Matters/logo/manmatters-logo.png" alt=" " />
    </Link>
     <div className="header__search">

     <input type="text" className="header__searchInput" />
   <SearchIcon className="header__searchIcon"/>
     </div>

     <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
        <div onClick={login}className="header__option">
        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
        <span  className="header__optionLineTwo">{user? 'Sign Out' : 'Sign in'}</span>
        </div>
        </Link>

        <Link to="/"className="header__link">
        <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span  className="header__optionLineTwo">& Orders</span>
        </div>
        </Link>

        <Link to="/"className="header__link">
        <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span  className="header__optionLineTwo">Prime</span>
        </div>
        </Link>

        <Link to="/checkout"className="header__link">
        <div className="header__optionBasket">
         <ShoppingBasketIcon />
         <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
       
        </div>
        </Link>

     </div>
  
      
    </nav>
  
}

export default Header
