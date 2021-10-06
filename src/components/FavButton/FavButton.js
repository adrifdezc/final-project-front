import React from "react";
import Button from "@restart/ui/esm/Button";

function FavButton({ isClicked, handleDelete, handleSubmit }) {
  return (
    <>
      {isClicked ? (
        <Button className="bg-transparent" onClick={handleDelete}>
          <i className="fa fa-heart text-danger"></i>
        </Button>
      ) : (
        <Button className="bg-transparent" onClick={handleSubmit}>
          <i className="fa fa-heart-o"></i>
        </Button>
      )}
    </>
  );
}

export default FavButton;
