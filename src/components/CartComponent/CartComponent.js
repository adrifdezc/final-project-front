import React from "react";

function CartComponent({ userData, setUserData }) {
  return (
    <>
{    console.log("userData",userData)
}      {console.log("Ingredients")}
      <i className="fa fa-shopping-cart"></i>
      <span className="badge badge-warning" id="lblCartCount">
        {userData?.shopping?.length}
      </span>
    </>
  );
}

export default CartComponent;
