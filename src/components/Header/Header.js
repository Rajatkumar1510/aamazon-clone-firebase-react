import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

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
        <div className="header-option">
          <span className="header-optionLineOne">Hello Guest</span>
          <span className="header-optionLineTwo">Sign In</span>
        </div>
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span
            className="header-optio
          
          
          
          nLineOne"
          >
            Return
          </span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
      </div>
      <div className="header-option-basket">
        <ShoppingBasketIcon />
        <span className="header-optionLineTwo header-basketCount">
          {basket.length}
        </span>
      </div>
    </div>
  );
};

export default Header;
