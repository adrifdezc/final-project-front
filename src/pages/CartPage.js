import { useState,useEffect } from "react";
import axios from "axios";
import {AuthContext} from "./../context/auth.context";
import {useContext} from "react";
import Button from "@restart/ui/esm/Button"

const API_URL = process.env.REACT_APP_API_URL;

function CartPage() {
  const { user } = useContext(AuthContext);

  const [ingredient, setIngredient] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getAllIngredients = () =>{
    const storedToken = localStorage.getItem("authToken");
    
    axios({
      method: "post",
      url: `${API_URL}/cart`,
      data: { user: user },
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response)=>{
      console.log("GetALLING", response)
      setIngredient(response.data.shopping)
      setIsLoading(false)
    })
    .catch((error)=> console.log(error))
  };
  const handleDelete = () =>{
    axios({
      method: "POST",
      url: `${API_URL}/delete-cart`,
      data: {ingredient: ingredient, user:user}
    })
    .then((result)=>console.log(result))
  }

  useEffect(()=>{
    getAllIngredients();
  }, [])

  return(
    isLoading ? <p> Loading...</p> :
    <div className="Profile">
      <h1>SHOPPING CART</h1>
      <section>
        {ingredient?.map((ingredient)=>(
          <>
          <h1>{ingredient.strIngredient}</h1><Button onClick = {handleDelete}><i class="fa fa-trash-o"></i></Button>
        </>
        ))}
      </section>
    </div>
  )



  }

export default CartPage;
