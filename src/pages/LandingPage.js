import Landing from "../components/Landing/Landing";
import News from "../components/News";
import Services from "../components/Services/Services";
import Video from "../components/Landing/Video";

function LandingPage() {
  return (
    <div id="Top" className="Home">
      <Video/>
      {/* <Landing landingPage={"landingPage"} /> */}
      <section id="Services" className="p-5 text-center">
        <Services />
        <button>
          <a href="#Top">Back to the top</a>
        </button>
      </section>
      <section id="Articles" className="m-4">
        <News />
      </section>
    </div>
  );
}

export default LandingPage;
