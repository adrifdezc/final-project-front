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
    <div className="CocktailDetails">
      <p>hello</p>
      {cocktail && (
        <>
          <h1>{cocktail.strDrink}</h1>
          <p>{cocktail.strInstructions}</p>
        </>
      )}

      <Link to="/cocktails">
        <button>Back to cocktails</button>
      </Link>

      <Link to={`/cocktails/edit/${cocktailId}`}>
        <button>Edit Cocktail</button>
      </Link>
    </div>
  );
}

export default CocktailsDetailsPage;
