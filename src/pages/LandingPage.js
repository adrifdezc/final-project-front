import Landing from "../components/Landing/Landing";
import News from "../components/News";
import Services from "../components/Services/Services";
import Video from "../components/Landing/Video";
import Footer from "../components/Footer/Footer";

function LandingPage() {
  return (
    <div id="Top" className="Home">
      <Video/>
      {/* <Landing landingPage={"landingPage"} /> */}
      <section id="Services" className="p-5 text-center">
        <Services />
      </section>
      <section id="Articles" className="m-4 text-center">
        <News />
        <button className="mt-5">
          <a href="#Top">Back to the top</a>
        </button>
      </section>
      <section id="Contact">
        <Footer/>
      </section>
    </div>
  );
}

export default LandingPage;
