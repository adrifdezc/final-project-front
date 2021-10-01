import Landing from "../components/Landing/Landing";
import CocktailSearch from "../components/CocktailSearch/CocktailSearch";

function LandingPage() {
  return (
    <div className="Home">
      <Landing landingPage ={"landingPage"}/>
      <CocktailSearch />
    </div>
  );
}

export default LandingPage;
