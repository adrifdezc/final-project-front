import React from "react";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./../context/auth.context";
import { useContext} from "react";

const API_URL = process.env.REACT_APP_API_URL;

const CocktailCard = ({ cocktail, loadingPage, getCocktails }) => {
  const { user } = useContext(AuthContext);

  const handleSubmit = () => {
    axios({
      method: "POST",
      url: `${API_URL}/add-favorite`,
      data: { cocktail: cocktail, user: user },
    })
      .then((result) => {
        console.log(`Result: `, result);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = () => {
    axios({
      method: "POST",
      url: `${API_URL}/delete-favorite`,
      data: { cocktail: cocktail, user: user },
    })
      .then((result) => {
        console.log(`Result2: `, result);
        getCocktails();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="col-lg-2 col-sm-4">
      <div className="card">
        <img src={cocktail.strDrinkThumb} alt="" />
        <h5 className="text-center">{cocktail.strDrink}</h5>
        <div className="row">
          <div className="col-6">
            {loadingPage === "cocktailList" ? (
              <Button onClick={handleSubmit}>
                <i class="fa fa-heart-o"></i>{" "}
              </Button>
            ) : (
              <Button onClick={handleDelete}>
                {" "}
                <i class="fa fa-trash-o"></i>{" "}
              </Button>
            )}
          </div>
          <div className="col-6">
            <Link to={`cocktails/${cocktail.idDrink}`}>
              <Button>
                <i class="fa fa-navicon"></i>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
