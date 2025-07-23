import BestDeals from "../assets/components/BestDeals";
import CategorySection from "../assets/components/CategorySection";
import FeatureProducts from "../assets/components/FeatureProducts";
import Header from "../assets/components/Header";
import MacbookSale from "../assets/components/MacbookSale";
import NewsLetter from "../assets/components/NewsLetter";
import SiteHighlights from "../assets/components/SiteHighlights";
import Swiper from "../assets/components/Swiper";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Swiper />
        <SiteHighlights/>
        <BestDeals/>
        <CategorySection/>
        <FeatureProducts/>
        <MacbookSale/>
        <NewsLetter/>
      </main>
    </>
  );
}
