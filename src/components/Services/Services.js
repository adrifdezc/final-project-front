import React from "react";
import ServicesCard from "./ServicesCard";
import SearchIMG from "./img/SearchIMG.png";
import CreateIMG from "./img/CreateIMG.png";
import CartIMG from "./img/CartIMG.png";

function Services() {
  return (
    <>
      <h1>Welcome to CocktailDO</h1>
      <section id="Section" className="row align-items-center p-4">
        <ServicesCard
          title={"Search by Name"}
          img={SearchIMG}
          description={`Find your Favorite Cocktail among +200 recipes`}
          link={"/cocktails"}
        />

        <ServicesCard
          title={"Create your Own"}
          img={CreateIMG}
          description={"Immortalize your Creations and never loose your Ideas"}
          link={"/create"}
        />
        <ServicesCard
          title={"Get your Ingredients"}
          img={CartIMG}
          description={"Create a list with the ingredients you need"}
          link={"/cart"}
        />
      </section>
    </>
  );
}

export default Services;
