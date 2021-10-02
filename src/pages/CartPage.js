import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import IngredientCard from "../components/IngredientCard";

const API_URL = process.env.REACT_APP_API_URL;

function CartPage() {
  const { user } = useContext(AuthContext);

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
        console.log("GetALLING", response);
        setIngredient(response.data.shopping);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllIngredients();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <p> Loading...</p>
  ) : (
    <div className="Profile m-5">
      <h1>SHOPPING CART</h1>
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
  );
}

export default CartPage;
