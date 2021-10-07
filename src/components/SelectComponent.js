import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

function SelectComponent({handleChange}) {
    const [selectItem, setSelectItem] = useState()

    useEffect(()=>{

        const fetchItems = async () => {
          const result = await axios(
            `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
          );
          setSelectItem(result.data.drinks)
          console.log(result)
        }
        fetchItems()
    },[setSelectItem])


    
    return (
      <select className="col-8 my-3 w-50 bg-white" onChange={handleChange}>
        <option defaultValue value="ingredient">
          Ingredient
        </option>

        {selectItem?.map((oneItem, index) => {
          return oneItem.strIngredient1.split(" ").length === 1 ? (
            <option key={index} value={oneItem.strIngredient1}>
              {oneItem.strIngredient1}
            </option>
          ) : null;
        })}
      </select>
    );
}

export default SelectComponent

