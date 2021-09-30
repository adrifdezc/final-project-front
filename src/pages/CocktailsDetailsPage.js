import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const getById = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function CocktailsDetailsPage(props) {
  const [cocktail, setCocktail] = useState(null);
  const cocktailId = props.match.params.cocktailId;
  const [loading, setLoading] = useState(true)
  

  const getCocktail = () => {

    axios
      .get(`${getById}${cocktailId}`)
      .then((response) => {
        const oneCocktail = response.data.drinks[0];
        setCocktail(oneCocktail);
        setLoading(false)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCocktail();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loading === false) {
      console.log(`CocktailID2: `, cocktail);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div className="CocktailDetails text-center">
      {cocktail && (
        <div className="row">
          <div className="col-3">
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              style={{ width: "200px" }}
            />
          </div>
          <div className="col-9">
            <h1>{cocktail.strDrink}</h1>
            <p>{cocktail.strInstructions}</p>
            {cocktail.strIngredient1 && (
              <p>
                {cocktail.strMeasure1} {cocktail.strIngredient1}
              </p>
            )}
            {cocktail.strIngredient2 && (
              <p>
                {cocktail.strMeasure2} {cocktail.strIngredient2}
              </p>
            )}
            {cocktail.strIngredient3 && (
              <p>
                {cocktail.strMeasure3} {cocktail.strIngredient3}
              </p>
            )}
            {cocktail.strIngredient4 && (
              <p>
                {cocktail.strMeasure4} {cocktail.strIngredient4}
              </p>
            )}
            {cocktail.strIngredient5 && (
              <p>
                {cocktail.strMeasure5} {cocktail.strIngredient5}
              </p>
            )}
            {cocktail.strIngredient6 && (
              <p>
                {cocktail.strMeasure6} {cocktail.strIngredient6}
              </p>
            )}
            {cocktail.strIngredient7 && (
              <p>
                {cocktail.strMeasure7} {cocktail.strIngredient7}
              </p>
            )}
          </div>

      <Link to="/cocktails">
        <button>Back to cocktails</button>
      </Link>

      <Link to={`/cocktails/edit/${cocktailId}`}>
        <button>Add to FAVs</button>
      </Link>
        </div>
      )}
    </div>
  );
}

export default CocktailsDetailsPage;
