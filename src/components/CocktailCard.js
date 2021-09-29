import React from "react";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

const CocktailCard = ({ cocktail }) => {
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
            <form action="/add-favorite" method="POST">
              <input
                type="hidden"
                name="idDrink"
                value="{{cocktail.idDrink}}"
              />
              <input
                type="hidden"
                name="strDrink"
                value="{{cocktail.strDrink}}"
              />
              <input
                type="hidden"
                name="strCategory"
                value="{{cocktail.strCategory}}"
              />
              <input type="hidden" name="strIBA" value="{{cocktail.strIBA}}" />
              <input
                type="hidden"
                name="strGlass"
                value="{{cocktail.strGlass}}"
              />
              <input
                type="hidden"
                name="strAlcoholic"
                value="{{cocktail.strAlcoholic}}"
              />
              <input
                type="hidden"
                name="strInstructions"
                value="{{cocktail.strInstructions}}"
              />
              <input
                type="hidden"
                name="strInstructionsDE"
                value="{{cocktail.strInstructionsDE}}"
              />
              <input
                type="hidden"
                name="strIngredient1"
                value="{{cocktail.strIngredient1}}"
              />
              <input
                type="hidden"
                name="strIngredient2"
                value="{{cocktail.strIngredient2}}"
              />
              <input
                type="hidden"
                name="strIngredient3"
                value="{{cocktail.strIngredient3}}"
              />
              <input
                type="hidden"
                name="strIngredient4"
                value="{{cocktail.strIngredient4}}"
              />
              <input
                type="hidden"
                name="strIngredient5"
                value="{{cocktail.strIngredient5}}"
              />
              <input
                type="hidden"
                name="strIngredient6"
                value="{{cocktail.strIngredient6}}"
              />
              <input
                type="hidden"
                name="strIngredient7"
                value="{{cocktail.strIngredient7}}"
              />
              <input
                type="hidden"
                name="strMeasure1"
                value="{{cocktail.strMeasure1}}"
              />
              <input
                type="hidden"
                name="strMeasure2"
                value="{{cocktail.strMeasure2}}"
              />
              <input
                type="hidden"
                name="strMeasure3"
                value="{{cocktail.strMeasure3}}"
              />
              <input
                type="hidden"
                name="strMeasure4"
                value="{{cocktail.strMeasure4}}"
              />
              <input
                type="hidden"
                name="strMeasure5"
                value="{{cocktail.strMeasure5}}"
              />
              <input
                type="hidden"
                name="strMeasure6"
                value="{{cocktail.strMeasure6}}"
              />
              <input
                type="hidden"
                name="strMeasure7"
                value="{{cocktail.strMeasure7}}"
              />
              <input
                type="hidden"
                name="strDrinkThumb"
                value="{{cocktail.strDrinkThumb}}"
              />

              <button class="star text-dark bg-transparent" type="submit">
                <i class="heart fa fa-heart-o"></i>
              </button>
            </form>
            <Link to={`cocktails/${cocktail.idDrink}`}>See Details</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
