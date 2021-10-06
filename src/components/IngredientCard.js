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
    
    const options = {
      method: "GET",
      url: `https://google-search3.p.rapidapi.com/api/v1/search/q=buy+${ingredient}`,
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "dbdd362db9msh4f2f00a32709170p14d716jsn5c5812a9557b",
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
      <div className="">
        <div className="card col-6">
          <img
            src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Small.png`}
            alt={ingredient.strIngredient}
            style={{width:"100px"}}
          />
          <h4>{ingredient.strIngredient}</h4>
          <p style={{fontSize:"10px"}}>{ingredient.strDescription}</p>
          <div className="row align-items-center">
            <Button onClick={handleDelete}>
              <i className="fa fa-trash-o"></i>
            </Button>
            <Button onClick={()=>handleSearch(ingredient.strIngredient)}>
              <i className="fa fa-list"></i>
            </Button>
          </div>
        </div>
        {search?.map((oneSearch,index)=>(
            
            <li key={index}>{oneSearch.title}| <a className="text-primary" href={oneSearch.link}> See Website </a></li>
            
        ))}
      </div>
    </>
  );
}

export default IngredientCard;
