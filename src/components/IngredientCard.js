import React from "react";
import axios from "axios";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import Button from "@restart/ui/esm/Button";
import { useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function IngredientCard({ ingredient, getIngredients }) {
  const { user } = useContext(AuthContext);

  const handleDelete = () => {
    axios({
      method: "POST",
      url: `${API_URL}/delete-cart`,
      data: { ingredient: ingredient, user: user },
    })
      .then((result) => {
        console.log(result);
        getIngredients();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getIngredients();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="card col-2 m-2 align-items-center text-center shadow-sm py-3 mb-1 bg-white rounded">
        <div className="row">
          <img
            src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Small.png`}
            alt={ingredient.strIngredient}
          />
        </div>
        <div className="row align-items-center">
          <div className="col-8">
            <h4>{ingredient.strIngredient}</h4>
          </div>
          <div className="col-4">
            <Button onClick={handleDelete}>
              <i className="fa fa-trash-o"></i>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IngredientCard;
