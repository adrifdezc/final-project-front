import News from "../components/News";
import Services from "../components/Services/Services";
import Video from "../components/Landing/Video";
import Footer from "../components/Footer/Footer";
import FavCard from "../components/favCard";

function LandingPage() {

  return (
    <div id="Top" className="Home">
      <Video />
      <Services />
      <News />
      <FavCard />
      <Footer />
    </div>
  );
}

export default LandingPage;
