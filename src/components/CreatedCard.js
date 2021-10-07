import React from "react";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function CreatedCard({ cocktailList, setCocktailList }) {
  const { user, userData } = useContext(AuthContext);

  const handleDelete = (cocktail) => {
    axios({
      method: "POST",
      url: `${API_URL}/delete-created`,
      data: { cocktail: cocktail, user: user },
    }).then((result) => {
      let filterCocktails = cocktailList.filter((thisCocktail) => {
        debugger;
        return thisCocktail._id !== result.data._id;
      });
      console.log(result);
      setCocktailList(filterCocktails);
      console.log(filterCocktails);
    });
  };

  return (
    <>
      {console.log(cocktailList)}
      {cocktailList
        ? cocktailList?.map((oneCocktail) => (
            <div
              key={oneCocktail.idDrink}
              className="card Created-recipes shadow m-2 col-2 p-4 justify-content-between text-justify"
            >
              <div className="row">
                <h6>{oneCocktail.strDrink}</h6>
                <h3>
                  <b>Alcoholic:</b> {oneCocktail.strAlcoholic}
                </h3>
                <h3>
                  <b>Category:</b> {oneCocktail.strCategory}
                </h3>
                <h3>
                  <b>Instructions:</b> {oneCocktail.strInstructions}
                </h3>
              </div>
              <div className="row">
                <div className="col-6">
                  {userData.rol === "admin" && (
                    <button onClick={() => handleDelete(oneCocktail._id)}>
                      <i className="fa fa-trash-o"></i>
                    </button>
                  )}
                </div>
                <div className="col-6">
                  <h3>{oneCocktail.createdAt.substring(0, 10)}</h3>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
}

export default CreatedCard;
