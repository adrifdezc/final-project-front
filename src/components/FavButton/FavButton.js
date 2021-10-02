import React from "react";

function FavButton({ isClicked }) {
  return (
    <>
      {isClicked ? (
        <i className="fa fa-heart text-danger"></i>
      ) : (
        <i className="fa fa-heart-o"></i>
      )}
    </>
  );
}

export default FavButton;
