import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import CreatedCard from "./CreatedCard";
import Landing from "./Landing/Landing"
const API_URL = process.env.REACT_APP_API_URL;

function AddCocktail() {
  const [cocktail, setCocktail] = useState("");
  const [strDrink, setStrDrink] = useState("");
  const [strCategory, setStrCategory] = useState("");
  const [strAlcoholic, setStrAlcoholic] = useState("");
  const [strInstructions, setstrInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      strDrink,
      strCategory,
      strAlcoholic,
      strInstructions,
    };

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/create-cocktail`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response);
        setStrDrink(response.data.strDrink);
        setStrCategory(response.data.strCategory);
        setStrAlcoholic(response.data.strAlcoholic);
        setstrInstructions(response.data.strInstructions);
      });
  };

  const getCreated = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/create-cocktail`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("COCKTAIL ARRAY", response.data);
        setCocktail(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCreated();
  }, []);

  return (
    <div className="container-form">
        <Landing />
      <div className="row justify-content-center pt-5">
          <h1 className="Share-header">SHARE WITH THE COMMUNITY YOUR FAVORITE COCKTAIL </h1>
          <form className="Form" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              className="shadow py-3 "
              type="text"
              placeholder="Cocktail's Name"
              name="name"
              value={strDrink}
              onChange={(e) => setStrDrink(e.target.value)}
            />

            <label>Category:</label>
            <input
              className="shadow py-3 "
              type="text"
              placeholder="Shot/Cocktail"
              name="category"
              value={strCategory}
              onChange={(e) => setStrCategory(e.target.value)}
            />
            <label>Alcohol:</label>
            <input
              className="shadow py-3 "
              type="text"
              placeholder="Yes/No"
              name="alocoholic"
              value={strAlcoholic}
              onChange={(e) => setStrAlcoholic(e.target.value)}
            />

            <label>Instructions:</label>
            <textarea
              className="shadow py-3 "
              type="text"
              placeholder="Write here the steps to follow"
              name="instructions"
              value={strInstructions}
              onChange={(e) => setstrInstructions(e.target.value)}
            />

            <button type="submit">Create</button>
          </form>
        </div>
        <div className="Friends row my-5 pt-5 justify-content-center">
          <h1>OUR FRIENDS' RECIPES</h1>
          <CreatedCard cocktail={cocktail} />
        </div>
      </div>
  );
}

export default AddCocktail;
