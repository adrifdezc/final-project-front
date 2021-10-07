import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import IngredientCard from "../components/IngredientCard";
import Loading from "../components/loading.gif"

const API_URL = process.env.REACT_APP_API_URL;

function CartPage() {
  const { user} = useContext(AuthContext);

  const [ingredients, setIngredient] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllIngredients = () => {
    const storedToken = localStorage.getItem("authToken");
    axios({
      method: "post",
      url: `${API_URL}/cart`,
      data: { user: user },
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((response) => {
        setIngredient(response.data.shopping);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

    

  useEffect(() => {
    getAllIngredients()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <img src={Loading} alt="Loading..." style={{ width: "100%" }} />
  ) : (
    <div className="Profile m-5">
      <div className="row">
        <div className="col-3 bg-light">
         <p style={{textAlign:"right"}}>Welcome to the cart, {user.name}.</p> 
         <h3 style={{textAlign: "right",
    margin: "20px",
    paddingTop: "10%"}}>We provide you with the best options to buy the ingredients you need, simply click on the list icon button to get the best online shops!</h3>

        </div>
        <div className="col-9">

        <h4>
          {" "}
          {ingredients.length === 0 ? (
            <p>Your shopping cart is empty</p>
          ) : (
            <p>Your shopping cart</p>
          )}
        </h4>
        <section className="container-fluid">
          <div className="row">
          {ingredients?.map((ingredient) => (
            <IngredientCard
              key={ingredient.idIngredient}
              ingredient={ingredient}
              getIngredients={getAllIngredients}
            />
          ))}
          </div>
        </section>
        </div>
      </div>
      <div className="col-6">
        
      </div>
      </div>
  );
}

export default CartPage;
