import { useState, useEffect } from "react";
import axios from "axios";
import CocktailCard from "../components/CocktailCard";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import Loading from "../components/loading.gif"

const API_URL = process.env.REACT_APP_API_URL;

function ProfilePage() {
  const { user, userData } = useContext(AuthContext);

  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCocktails = () => {
    const storedToken = localStorage.getItem("authToken");

    axios({
      method: "POST",
      url: `${API_URL}/profile`,
      data: { user: user },
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((response) => {
        console.log(response);
        setCocktails(response.data.favorites);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllCocktails();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <img src={Loading} alt="Loading..." style={{ width: "100%" }} />
  ) : (
    <div className="Profile">
      {console.log("user", userData)}
      <h1>Profile Page</h1>
      <section className="cards" id="search">
        <div className="row">
          {cocktails?.map((cocktail) => (
            <CocktailCard
              loadingPage={"profile"}
              key={cocktail.idDrink}
              cocktail={cocktail}
              getCocktails={getAllCocktails}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
