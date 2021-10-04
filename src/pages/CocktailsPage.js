import { useEffect, useState } from "react";
import axios from "axios";
import CocktailCard from "../components/CocktailCard";
import Search from "../components/Search";

function CocktailsPage() {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchCocktails = async () => {
      const result = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      );

      //LLamar a usuario + popular favs + array con drinks en favs ... filtrar las que no sean igual a NOM pej
      setCocktails(result.data.drinks);
      setIsLoading(false);
    };
    fetchCocktails();
  }, [query]);
  const cocktailList = cocktails?.map(
    (cocktail) =>
      cocktail.strDrink.toLowerCase().includes(query) && (
        <CocktailCard
          loadingPage={"cocktailList"}
          key={cocktail.idDrink}
          cocktail={cocktail}
          {...cocktail}
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
       <div className="col-3 bg-primary">
         <h4>FILTER</h4>
       </div>
         <div className="col-7 bg-dark">
        <section className="cards" id="search">
          <div className="row">
            {cocktailList || <h1>There's no cocktail</h1>}
          </div>
        </section>
        </div>
        </div>
    </>
  );
}

export default CocktailsPage;
