import React from 'react';
import {Link} from "react-router-dom"

function ServicesCard({img, title, description, link, ref}) {
    return (
        <div className="col-4">
            <Link to={link} >
          <div className="card p-3 shadow align-items-center">
            <img src={img} alt="search" style={{ height: "120px" }} />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </Link>
        </div>
    );
}

export default ServicesCard
