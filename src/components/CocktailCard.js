import React from "react";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const CocktailCard = ({ cocktail }) => {

  const handleSubmit = () => {
    axios({
      method: "POST",
      url: `${API_URL}/add-favorite`,
      data: {cocktail}
    })
    .then(result=>{
      console.log(result)
    })
    .catch(error=>console.log(error))
  }

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={cocktail.strDrinkThumb} alt="" />
        </div>
        <div className="card-back">
          <h1>{cocktail.strDrink}</h1>
          <ul>
            <li>
              <strong>Category:</strong> {cocktail.strCategory}
            </li>
            {cocktail.strTags && (
              <li>
                <strong>Tags:</strong> {cocktail.strTags}
              </li>
            )}
            <li>
              <strong>Alcoholic:</strong> {cocktail.strAlcoholic}
            </li>
            <Button onClick={handleSubmit}>Add Favorites </Button>
            <Link to={`cocktails/${cocktail.idDrink}`}>
              <Button>See Details</Button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;



