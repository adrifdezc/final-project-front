import { useRef } from "react";
import Landing from "../components/Landing/Landing";
import News from "../components/News";
import Services from "../components/Services/Services";

function LandingPage() {

  return (
    <div id="Top" className="Home">
      <Landing landingPage ={"landingPage"}/>
      <section id="Services" className="p-5 text-center">
      <Services />
      <button><a href="#Top">Back to the top</a></button>
      </section>
      <section className="m-5">
        <div className="container-fluid">
        <News/>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
