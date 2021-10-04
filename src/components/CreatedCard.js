import React, { useEffect } from 'react'

function CreatedCard({cocktail}) {
    
    return (
        <>
        {cocktail ?
            cocktail?.map((oneCocktail)=> (
                <>
                <h1>{oneCocktail.strDrink}</h1>
                </>
            ))
            
            :null
        }
        </>
    )
}

export default CreatedCard
