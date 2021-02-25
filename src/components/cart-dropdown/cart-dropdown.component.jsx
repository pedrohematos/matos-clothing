import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import CustommButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

function CartDropdown(props) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
