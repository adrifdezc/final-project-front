import React from "react";
import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import FavButton from "./FavButton/FavButton";
import { useState } from "react";
import SeeDetailsButton from "./SeeDetailsButton/SeeDetailsButton";

const API_URL = process.env.REACT_APP_API_URL;

const CocktailCard = ({ cocktail, loadingPage, getCocktails }) => {
  const { user } = useContext(AuthContext);

  const [isClicked, setIsClicked] = useState(false);
  const [seeDetails, setSeeDetails] = useState(false);

  const handleSubmit = () => {
    axios({
      method: "POST",
      url: `${API_URL}/add-favorite`,
      data: { cocktail: cocktail, user: user},
    })
      .then((result) => {
        console.log(`Result: `, result);
        setIsClicked(true);
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

  const handleClick = () => {
    if (seeDetails === false) {
      setSeeDetails(true);
    } else {
      setSeeDetails(false);
    }
  };

  return (
    <>
      <div className="col-lg-3 col-sm-4">
        <div className="card">
          <img src={cocktail.strDrinkThumb} alt="" />
          <h5 className="text-center">{cocktail.strDrink}</h5>
          <div className="row text-center">
            {!seeDetails ? (
              <>
                <div className="col-6">
                  {loadingPage === "cocktailList" ? (
                    <Button onClick={handleSubmit}>
                      <FavButton isClicked={isClicked} />
                    </Button>
                  ) : (
                    <Button onClick={handleDelete}>
                      {" "}
                      <i className="fa fa-trash-o"></i>{" "}
                    </Button>
                  )}
                </div>
                <div className="col-6">
                  <Button onClick={handleClick}>
                    <SeeDetailsButton
                      cocktail={cocktail}
                      seeDetails={seeDetails}
                    />
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="col-12">
                  <Button onClick={handleClick}>
                    <SeeDetailsButton
                      cocktail={cocktail}
                      seeDetails={seeDetails}
                    />
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CocktailCard;
