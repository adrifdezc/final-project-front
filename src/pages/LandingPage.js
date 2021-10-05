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
      <section id="Articles" className="m-5">
        <News/>
      </section>
    </div>
  );
}

export default LandingPage;
