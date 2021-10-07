import React from 'react'
import LinkedIn from "./linkedinlogo.png"
import GitHubLogo from "./github.png"

function Footer() {
    return (
      <section id="Contact">
        <div className="container-fluid p-5 text-center bg-light">
          <div className="row align-stretch">
            <div className="col-4 ">
              <h4>ABOUT</h4>
              <p style={{ width: "200px", marginLeft: "25%" }}>
                App created for the last project of the Full-Stack Web
                Development Bootcamp Barcelona
              </p>
            </div>
            <div className="col-4 d-flex flex-column">
              <h4>API's</h4>
              <a href="https://www.thecocktaildb.com/api.php">TheCocktailDB</a>
              <a href="https://rapidapi.com/webit/api/webit-news-search/">
                Webit News Search
              </a>
              <a href="https://rapidapi.com/apigeek/api/google-search3/">
                Google Search
              </a>
            </div>
            <div className="col-4 d-flex flex-column">
              <h4>CONTACT</h4>
              <p>Adrián Fernández</p>
              <a href="https://www.linkedin.com/in/adrian-fernandez-carmona/">
                {" "}
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
                  style={{ width: "15px" }}
                />{" "}
              </a>
              <a href="https://www.linkedin.com/in/adrian-fernandez-carmona/">
                {" "}
                <img
                  src={GitHubLogo}
                  alt="GitHub"
                  style={{ width: "15px" }}
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Footer
