import { useState } from "react";
import axios from "axios";
import React from 'react'

const API_URL = process.env.REACT_APP_API_URL;


function AddCocktail() {
    const [strDrink, setStrDrink] = useState("")
    const [strCategory, setStrCategory] = useState("")
    const [strAlcoholic, setStrAlcoholic] = useState("")
    const [strInstructions, setstrInstructions] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = {strDrink, strCategory, strAlcoholic, strInstructions}
        
        const storedToken = localStorage.getItem("authToken");

        axios.post(`${API_URL}/create`, requestBody, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response)=>{
            setStrDrink(response.data.strDrink);
            setStrCategory(response.data.strCategory);
            setStrAlcoholic(response.data.strAlcoholic);
            setstrInstructions(response.data.strInstructions)
        })
    }

    return (
      <div className="container-form">
        <h3>Add Cocktail </h3>
        <form className="Form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Cocktail's Name"
            name="name"
            value={strDrink}
            onChange={(e) => setStrDrink(e.target.value)}
          />

          <label>Category:</label>
          <input
            type="text"
            placeholder="Shot/Cocktail"
            name="category"
            value={strCategory}
            onChange={(e) => setStrCategory(e.target.value)}
          />
          <label>Alcohol:</label>
          <input
            type="text"
            placeholder="Yes/No"
            name="alocoholic"
            value={strAlcoholic}
            onChange={(e) => setStrAlcoholic(e.target.value)}
          />

          <label>Instructions:</label>
          <textarea
            type="text"
            placeholder="Write here the steps to follow"
            name="instructions"
            value={strInstructions}
            onChange={(e) => setstrInstructions(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default AddCocktail
