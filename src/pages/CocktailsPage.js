import { useEffect, useState } from "react";
import axios from "axios";
import CocktailCard from "../components/CocktailCard";
import Search from "../components/Search";

import SelectComponent from "../components/SelectComponent";


function CocktailsPage() {

  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  // const getAllCocktails = () => {
  //   const storedToken = localStorage.getItem("authToken");

  //   axios({
  //     method: "POST",
  //     url: `${API_URL}/profile`,
  //     data: { user: user },
  //     headers: { Authorization: `Bearer ${storedToken}` },
  //   })
  //     .then((response) => {
  //       setCocktails(response.data.favorites);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const handleChange = (event) => {
    let selectedOption = event.target.value;
    setQuery(selectedOption.toLowerCase()); ////////*************************************Change the query so it should enter the search bellow, but it doesnt */
    // const fetchCocktails = async () => {
    //   const result = await axios(
    //     `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${selectedOption}`
    //     );

    //     //LLamar a usuario + popular favs + array con drinks en favs ... filtrar las que no sean igual a NOM pej
    //     setCocktails(result.data.drinks);
    //     setIsLoading(false);
    //   };
    //   fetchCocktails();
  };
  useEffect(() => {
    const fetchCocktails = async () => {
      const result = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      );

      //LLamar a usuario + popular favs + array con drinks en favs ... filtrar las que no sean igual a NOM pej
      setCocktails(result.data.drinks);
      console.log("DATA", result.data.drinks);
      setIsLoading(false);
    };
    fetchCocktails();
  }, [query]);
  //cocktail.strAlcoholic === "Non alcoholic"

  const cocktailList = cocktails?.map(
    (cocktail) =>
      cocktail.strDrink.toLowerCase().includes(query) && (
        <CocktailCard
          loadingPage={"cocktailList"}
          key={cocktail.idDrink}
          cocktail={cocktail}
        ></CocktailCard>
      )
  );

  return isLoading ? (
    <h1>LOADING...</h1>
  ) : (
    <>
      <div className="container p-3 ">
        <h1 className="text-center mt-3">OUR COCKTAILS</h1> <br />
        <Search getQuery={(q) => setQuery(q)} />
      </div>
      <div className="row p-4 bg-danger justify-content-around">
        <div className="col-3 bg-light">
          <h4>FILTER</h4>
          <select onChange={handleChange}>
            <option selected value="ingredient">Ingredient</option>
            <SelectComponent />
          </select>
        </div>
        <div className="col-7 bg-dark">
          <section className="cards" id="search">
            <div className="row">
              {/* {cocktailList || <h1>There's no cocktail</h1>} */}

              {query && (cocktailList || <h1>There's no cocktail</h1>)}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CocktailsPage;
