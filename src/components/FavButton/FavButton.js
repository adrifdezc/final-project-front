import React from "react";
import Button from "@restart/ui/esm/Button";

function FavButton({ isClicked, handleDelete, handleSubmit }) {
  return (
    <>
      {isClicked ? (
        <Button onClick={handleDelete}>
        <i className="fa fa-heart text-danger"></i>
        </Button>
      ) : (
        <Button onClick={handleSubmit}>     
          <i className="fa fa-heart-o"></i>
        </Button>
      )}
    </>
  );
}

export default FavButton;
