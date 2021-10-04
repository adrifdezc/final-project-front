import React, { useEffect } from 'react'

function CreatedCard({cocktail}) {
    
    return (
        <>

            {cocktail ?
                cocktail?.map((oneCocktail)=> (
                    <div className="card Created-recipes shadow m-2 col-2 p-4 justify-content-top text-justify">
                        <h6>{oneCocktail.strDrink}</h6>
                        <h3><b>Alcoholic:</b> {oneCocktail.strAlcoholic}</h3>
                        <h3><b>Category:</b> {oneCocktail.strCategory}</h3>
                        <h3><b>Instructions:</b> {oneCocktail.strInstructions}</h3>
                    </div>
                ))
                
                :null
            }
        </>
     
    )
}

export default CreatedCard
