import { useEffect, useState } from "react";
import axios from "axios";
import CocktailCard from "../components/CocktailCard";
import Search from "../components/Search";

function CocktailsPage() {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCocktails = async () => {
      const result = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      );

      setCocktails(result.data.drinks);
      setIsLoading(false);
    };
    fetchCocktails();
  }, [query]);

  const cocktailList = cocktails?.map((cocktail) => (
        cocktail.strDrink.toLowerCase().includes(query)&&(
        <CocktailCard loadingPage={"cocktailList"} key={cocktail.idDrink} cocktail={cocktail} {...cocktail}></CocktailCard> )))

  return isLoading ? (
    <h1>LOADING...</h1>
  ) : (
    <>
    <h1>Cocktail List</h1> <br />
      <Search getQuery ={(q)=> setQuery(q)}/>
    <section className="cards" id="search">
      {
//if cocktails not undefined .map
      cocktailList || <h1>There's no cocktail</h1>
      }
    </section>
    </>

  );
}

export default CocktailsPage;
