import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import Button from "@restart/ui/esm/Button";
import FavButton from "../components/FavButton/FavButton";

const API_URL = process.env.REACT_APP_API_URL;

const getById = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function CocktailsDetailsPage(props) {
  const { user, userData, setUserData } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");

  const [cocktail, setCocktail] = useState(null);
  const cocktailId = props.match.params.cocktailId;
  const [loading, setLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const getCocktail = () => {
    axios
      .get(`${getById}${cocktailId}`)
      .then((response) => {
        const oneCocktail = response.data.drinks[0];
        setCocktail(oneCocktail);
        console.log(oneCocktail);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  const handleSubmit = () => {
    axios({
      method: "POST",
      url: `${API_URL}/add-favorite`,
      data: { cocktail: cocktail, user: user },
    })
      .then((result) => {
        console.log(`Result: `, result);
        setIsClicked(true);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCocktail();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (userData && userData.favorites && cocktail) {
      const foundCocktail = userData.favorites.find((favorite) => {
        return favorite.idDrink === cocktail.idDrink;
      });
      if (foundCocktail) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
      console.log("Found", foundCocktail);
    }
  }, [userData, cocktail]);

  const handleCart = (ingredient) => {
    axios
      .post(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`
      )
      .then((response) => {
        axios({
          method: "POST",
          url: `${API_URL}/add-ingredient`,
          data: response.data.ingredients[0],
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
        setUserData(response.data)
          });
      });
  };

  useEffect(() => {
    if (loading === false) {
      console.log(`CocktailID2: `, cocktail);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div className="CocktailDetails text-center">
      {console.log(userData)}
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
                {cocktail.strMeasure1} {cocktail.strIngredient1}{" "}
                <button onClick={() => handleCart(cocktail.strIngredient1)}>
                  <i className="fa fa-cart-plus"></i>
                </button>
              </p>
            )}
            {cocktail.strIngredient2 && (
              <p>
                {cocktail.strMeasure2} {cocktail.strIngredient2}{" "}
                <button onClick={() => handleCart(cocktail.strIngredient2)}>
                  <i className="fa fa-cart-plus"></i>
                </button>
              </p>
            )}
            {cocktail.strIngredient3 && (
              <p>
                {cocktail.strMeasure3} {cocktail.strIngredient3}{" "}
                <button onClick={() => handleCart(cocktail.strIngredient3)}>
                  <i className="fa fa-cart-plus"></i>
                </button>
              </p>
            )}
            {cocktail.strIngredient4 && (
              <p>
                {cocktail.strMeasure4} {cocktail.strIngredient4}{" "}
                <button onClick={() => handleCart(cocktail.strIngredient4)}>
                  <i className="fa fa-cart-plus"></i>
                </button>
              </p>
            )}
            {cocktail.strIngredient5 && (
              <p>
                {cocktail.strMeasure5} {cocktail.strIngredient5}{" "}
                <button onClick={() => handleCart(cocktail.strIngredient5)}>
                  <i className="fa fa-cart-plus"></i>
                </button>
              </p>
            )}
            {cocktail.strIngredient6 && (
              <p>
                {cocktail.strMeasure6} {cocktail.strIngredient6}{" "}
                <button onClick={() => handleCart(cocktail.strIngredient6)}>
                  <i className="fa fa-cart-plus"></i>
                </button>
              </p>
            )}
            {cocktail.strIngredient7 && (
              <p>
                {cocktail.strMeasure7} {cocktail.strIngredient7}{" "}
                <button onClick={() => handleCart(cocktail.strIngredient7)}>
                  <i className="fa fa-cart-plus"></i>
                </button>
              </p>
            )}
          </div>

          <Link to="/cocktails">
            <button>Back to cocktails</button>
          </Link>

          <Button onClick={handleSubmit}>
            <FavButton isClicked={isClicked} />
          </Button>
        </div>
      )}
    </div>
  );
}

export default CocktailsDetailsPage;
