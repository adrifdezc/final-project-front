import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

function SelectComponent() {
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
     
        <>
        
          {selectItem?.map((oneItem, index)=>{
              
              return oneItem.strIngredient1.split(" ").length === 1 ?
            <option key={index} value={oneItem.strIngredient1}>{oneItem.strIngredient1}</option> : null
           
          }
              

              
              )
              
            }
            </>
    
    );
}

export default SelectComponent

