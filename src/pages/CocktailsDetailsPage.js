import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import Button from "@restart/ui/esm/Button";
import FavButton from "../components/FavButton/FavButton";
import Landing from "../components/Landing/Landing"

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
        }).then((response) => {
          setUserData(response.data);
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
    <>
      <div className="CocktailDetails p-5 text-center">
        {cocktail && (
          <div
            className="row align-center shadow"
            style={{ borderRadius: "50px", backgroundColor: "ghostwhite" }}
          >
            <div className="col-4 p-2">
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                style={{
                  width: "450px",
                  borderRadius: "50px",
                  filter: "saturation(25%)",
                }}
              />
            </div>
            <div className="col-8">
              <div className="row">
                <div className="row">
                  <h1>{cocktail.strDrink}</h1>
                </div>
                <div className="Details row ">
                  <div className="col-4 font-italic">
                    {cocktail.strCategory}
                  </div>
                  <div className="col-4">{cocktail.strAlcoholic}</div>
                  <div className="col-4">{cocktail.strGlass}</div>
                </div>
                <hr style={{ marginLeft: "5%", width: "90%" }} />
                <div className="row pt-4">
                  <div className="col-6">
                    <div className="Ingredients container">
                      {cocktail.strIngredient1 && (
                        <div className="row align-items-end">
                          <div className="col-8">
                            <p>
                              {cocktail.strMeasure1} {cocktail.strIngredient1}{" "}
                            </p>
                          </div>
                          <div className="col-4">
                            <button
                              className="bg-transparent"
                              onClick={() =>
                                handleCart(cocktail.strIngredient1)
                              }
                            >
                              <i className="fa fa-cart-plus"></i>
                            </button>
                          </div>
                        </div>
                      )}
                      {cocktail.strIngredient2 && (
                        <div className="row align-items-end">
                          <div className="col-8">
                            <p>
                              {cocktail.strMeasure2} {cocktail.strIngredient2}{" "}
                            </p>
                          </div>
                          <div className="col-4">
                            <button
                              className="bg-transparent"
                              onClick={() =>
                                handleCart(cocktail.strIngredient2)
                              }
                            >
                              <i className="fa fa-cart-plus"></i>
                            </button>
                          </div>
                        </div>
                      )}
                      {cocktail.strIngredient3 && (
                        <div className="row align-items-end">
                          <div className="col-8">
                            <p>
                              {cocktail.strMeasure3} {cocktail.strIngredient3}{" "}
                            </p>
                          </div>
                          <div className="col-4">
                            <button
                              className="bg-transparent"
                              onClick={() =>
                                handleCart(cocktail.strIngredient3)
                              }
                            >
                              <i className="fa fa-cart-plus"></i>
                            </button>
                          </div>
                        </div>
                      )}
                      {cocktail.strIngredient4 && (
                        <div className="row align-items-end">
                          <div className="col-8">
                            <p>
                              {cocktail.strMeasure4} {cocktail.strIngredient4}{" "}
                            </p>
                          </div>
                          <div className="col-4">
                            <button
                              className="bg-transparent"
                              onClick={() =>
                                handleCart(cocktail.strIngredient4)
                              }
                            >
                              <i className="fa fa-cart-plus"></i>
                            </button>
                          </div>
                        </div>
                      )}
                      {cocktail.strIngredient5 && (
                        <div className="row align-items-end">
                          <div className="col-8">
                            <p>
                              {cocktail.strMeasure5} {cocktail.strIngredient5}{" "}
                            </p>
                          </div>
                          <div className="col-4">
                            <button
                              className="bg-transparent"
                              onClick={() =>
                                handleCart(cocktail.strIngredient5)
                              }
                            >
                              <i className="fa fa-cart-plus"></i>
                            </button>
                          </div>
                        </div>
                      )}
                      {cocktail.strIngredient6 && (
                        <div className="row align-items-end">
                          <div className="col-8">
                            <p>
                              {cocktail.strMeasure6} {cocktail.strIngredient6}{" "}
                            </p>
                          </div>
                          <div className="col-4">
                            <button
                              className="bg-transparent"
                              onClick={() =>
                                handleCart(cocktail.strIngredient6)
                              }
                            >
                              <i className="fa fa-cart-plus"></i>
                            </button>
                          </div>
                        </div>
                      )}
                      {cocktail.strIngredient7 && (
                        <div className="row align-items-end">
                          <div className="col-8">
                            <p>
                              {cocktail.strMeasure7} {cocktail.strIngredient7}{" "}
                            </p>
                          </div>
                          <div className="col-4">
                            <button
                              className="bg-transparent"
                              onClick={() =>
                                handleCart(cocktail.strIngredient7)
                              }
                            >
                              <i className="fa fa-cart-plus"></i>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-6">
                    <h4 style={{ margin: "20px" }}>
                      {cocktail.strInstructions}
                    </h4>
                    <Button className="bg-transparent" onClick={handleSubmit}>
                      <FavButton isClicked={isClicked} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Link to="/cocktails">
          <button>Back to cocktails</button>
        </Link>
      </div>
    </>
  );
}

export default CocktailsDetailsPage;
