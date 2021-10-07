import React from 'react'
import { Link } from 'react-router-dom';



function SeeDetailsButton({seeDetails,cocktail}) {
    return (
      <>
        {!seeDetails ? (
          <i className="fa fa-navicon"></i>
        ) : (
          <>
            <p>{cocktail.strAlcoholic}</p>
            <p style={{textAlign:"justify"}}>{cocktail.strInstructions}</p>
            <Link className="text-warning" to={`cocktails/${cocktail.idDrink}`}>See More</Link>

          </>
        )}
      </>
    );
}

export default SeeDetailsButton
