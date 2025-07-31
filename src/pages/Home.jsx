import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
// import BestSeller from "../components/BestSeller";
import OurPolocu from "../components/OurPolocu";
import NewsletterBox from "../components/NewsletterBox";
import ProductCategories from "../components/ProductCategories";
import SpecialOffer from "../components/SpecialOffer";
import ProductSlider from "../components/ProductSlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <ProductCategories />
      <SpecialOffer />
      <ProductSlider />
      {/* <BestSeller /> */}
      <OurPolocu />
      <NewsletterBox />
    </div>
  );
};

export default Home;
