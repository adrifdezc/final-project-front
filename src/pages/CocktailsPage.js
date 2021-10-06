import { useEffect, useState } from "react";
import axios from "axios";
import CocktailCard from "../components/CocktailCard";
import Search from "../components/Search";
import Landing from "../components/Landing/Landing";
import Loading from "../components/loading.gif";

import SelectComponent from "../components/SelectComponent";

function CocktailsPage() {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    let selectedOption = event.target.value;
    setQuery(selectedOption.toLowerCase()); ////////*************************************Change the query so it should enter the search bellow, but it doesnt */
  };

  const handleChangeAlcoholic = (e) => {
    let selectedAlcoholic = e.target.value;
    setQuery(selectedAlcoholic);
    console.log("selectedAlcoholic", selectedAlcoholic);
    console.log("query", query);
  };
  useEffect(() => {
    const fetchCocktails = async () => {
    
      let result = [];
      let result2 = [];
      let oneCocktail = [];
      if (query === "Alcoholic" || query === "Non_Alcoholic") {
        result2 = await axios(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${query}`
        );
        console.log("R2", result2.data.drinks);
        let i = 0;
        for (i in result2.data.drinks) {
          oneCocktail = await axios(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${result2.data.drinks[i].idDrink}`
          );
          result.push(oneCocktail.data.drinks[0]);
        }
        setCocktails(result);
        setIsLoading(false);
      } else {
        result = await axios(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
        );
        setCocktails(result.data.drinks);
        setIsLoading(false);
      }
    };

    fetchCocktails();
    // setQuery("vodka")
  }, [query]);

  const cocktailList = cocktails?.map(
    (cocktail) =>
      // cocktail.strDrink.toLowerCase().includes(query) &&
       (
        <CocktailCard
          loadingPage={"cocktailList"}
          key={cocktail.idDrink}
          cocktail={cocktail}
        ></CocktailCard>
      )
  );

  return isLoading ? (
    <img src={Loading} alt="Loading..." style={{ width: "100%" }} />
  ) : (
    <>
      <Landing />
      <div className="p-3 "></div>
      <div className="Cocktail-list row p-4 justify-content-around">
        <div className="row p-4 bg-light shadow">
          <Search getQuery={(q) => setQuery(q)} />
          <p>By Ingredient</p>
          <select className="my-3" onChange={handleChange}>
            <option defaultValue value="ingredient">
              Ingredient
            </option>
            <SelectComponent />
          </select>
          <form>
            <div className="row mt-3">
              <div className="col-4">

          <p>By Alcohol</p>
              </div>
              <div
                onChange={handleChangeAlcoholic}
                className="col-4 form-check"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  value="Alcoholic"
                  defaultChecked
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                Alcoholic
              </div>
              <div
                onChange={handleChangeAlcoholic}
                className="col-4 form-check"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  value="Non_Alcoholic"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                Non Alcoholic
              </div>
            </div>
          </form>
          {/* <div className="row mt-3">
            <p>By Category</p>
            <div onChange={handleChangeAlcoholic} className="col-6 form-check">
              <input
                className="form-check-input"
                type="radio"
                value="Cocktail"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                defaultChecked
              />
              Cocktail
            </div>
            <div className="col-6 form-check">
              <input
                className="form-check-input"
                type="radio"
                value="Shot"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              Shot
            </div>
          </div> */}
        </div>
        <div className="row bg-light shadow">
          <section className="cards" id="search">
            <div className="row">
              {console.log("CocktaiLList", cocktailList)}
              {cocktailList || <h1>There's no cocktail</h1>}
              {/* {query && (cocktailList || <h1>There's no cocktail</h1>)} */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CocktailsPage;
