import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
const Header = () => {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />
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
        <span className="header-optionLineTwo header-basketCount">0</span>
      </div>
    </div>
  );
};

export default Header;
