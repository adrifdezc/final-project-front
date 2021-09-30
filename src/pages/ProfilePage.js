import { useState, useEffect } from "react";
import axios from "axios";
import CocktailCard from "../components/CocktailCard";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function ProfilePage() {
  const { user } = useContext(AuthContext);

  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCocktails = () => {
    const storedToken = localStorage.getItem("authToken");

    //GET se pasa la info en la url
    //POST por data 
    axios({
      method: "POST",
      url: `${API_URL}/profile`,
      data: { user: user },
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      // .get(`${API_URL}/profile`, user, {
      //   headers: { Authorization: `Bearer ${storedToken}` },
      // })
      .then((response) => {
        console.log(response);
        setCocktails(response.data.favorites);
        setIsLoading(false)
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllCocktails();
  }, []);

  /* 
    Useeffect 1- primera vez que cargue[] 
    Llamada get a backend buscando usuario por nom or id
    devuelve populate
    favorites.map
    */

  return (
    isLoading ? <p>Loading..</p> : 
    <div className="Profile">
      <h1>Profile Page</h1>
      <section className="cards" id="search">
        {cocktails?.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            cocktail={cocktail}   />
        ))}
      </section>
    </div>
  );
}

export default ProfilePage;
