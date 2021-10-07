import News from "../components/News";
import Services from "../components/Services/Services";
import Video from "../components/Landing/Video";
import Footer from "../components/Footer/Footer";
import FavCard from "../components/favCard";

function LandingPage() {
  return (
    <div id="Top" className="Home text-secondary">
      <Video />
      <Services />
      <News />
      <FavCard />
      <div className="py-3 text-center">
        <button >
        <a href="#Top"> Back</a>
      </button>
      </div>
      
      <Footer />
    </div>
  );
}

export default LandingPage;
