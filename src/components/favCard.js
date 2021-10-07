import React from 'react'
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import { CardGroup, Card } from "react-bootstrap";

function FavCard() {
const { userData } = useContext(AuthContext);

    return (
      <section className="text-center">
        {userData?.favorites.length > 0 ? (
          <>
            <h1>Your Favorites</h1>
            <div className="Favs row p-5 text-center">
              <CardGroup>
                {userData?.favorites?.map((thisCocktail) => (
                  <Card key={thisCocktail.idDrink} className="p-1">
                    <Card.Img variant="top" src={thisCocktail.strDrinkThumb} />
                    <Card.Body>
                      <Card.Title>{thisCocktail.strDrink}</Card.Title>
                      <Card.Text>{thisCocktail.strCategory}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="row text-muted">
                        <div className="col-6">{thisCocktail.strAlcoholic}</div>
                        <div className="col-6">{thisCocktail.strGlass} </div>
                      </small>
                    </Card.Footer>
                  </Card>
                ))}
              </CardGroup>
            </div>
          </>
        ) : null}
      </section>
    );
}

export default FavCard
