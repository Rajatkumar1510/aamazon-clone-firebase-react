import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";

import { auth } from "../../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header-option">
            <span className="header-optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </div>
      <div className="header-nav">
        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Return</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header-option-basket">
          <ShoppingBasketIcon />
          <span className="header-optionLineTwo header-basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
