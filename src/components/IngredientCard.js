import React from "react";
import axios from "axios";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import Button from "@restart/ui/esm/Button";
import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function IngredientCard({ ingredient, getIngredients }) {
  const { user, setUserData } = useContext(AuthContext);

  const [search, setSearch] = useState();
  const [isClicked, setIsClicked] = useState(false)

  const handleDelete = () => {
    axios({
      method: "POST",
      url: `${API_URL}/delete-cart`,
      data: { ingredient: ingredient, user: user },
    })
      .then((result) => {
        console.log("RESULT", result);
        getIngredients();
        setUserData(result.data);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (ingredient) =>{
    setIsClicked(!isClicked)
    

      const options = {
        method: "GET",
        url: `https://google-search3.p.rapidapi.com/api/v1/search/q=buy+${ingredient}`,
        headers: {
          "x-user-agent": "desktop",
          "x-rapidapi-host": process.env.REACT_APP_API_KEY_HOST_BUY,
          "x-rapidapi-key": process.env.REACT_APP_API_KEY_BUY,
        },
      };
      
      const fetchSearch = async () => {
        const response = await axios(options);
        
        setSearch(response.data.results);
        console.log(response.data);
      };
      fetchSearch()
    
  }
  

  useEffect(() => {
    getIngredients();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
        <div className="description text-center align-items-center card p-4 col-4">
              {" "}
              <img
                src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Small.png`}
                alt={ingredient.strIngredient}
                style={{ width: "100px", marginBottom:"20px"}}
              />
           
              <h4>{ingredient.strIngredient}</h4>
              <p>{ingredient.strDescription}</p>
            <div className="row">

              <Button
                onClick={handleDelete}
                className="bg-transparent"
                style={{ width: "10px" }}
              >
                <i className="fa fa-trash-o"></i>
              </Button>
              <Button
                onClick={() => handleSearch(ingredient.strIngredient)}
                className="bg-transparent"
                style={{ width: "10px" }}
              >
                <i className="fa fa-list"></i>
              </Button>
            </div>
            
            <div className="row text-justify">
            {search?.map((oneSearch, index) => (
              <div className="col-6 text-center bg-light" key={index}>
                <p>
                  {oneSearch.title}
                  <br />{" "}
                  <a className="text-primary" href={oneSearch.link}>
                    {" "}
                    See Website{" "}
                  </a>
                </p>{" "}
              </div>
            ))}
            </div>
          </div>
    </>
  );
}

export default IngredientCard;
