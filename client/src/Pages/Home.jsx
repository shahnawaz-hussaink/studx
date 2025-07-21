import Header from "../assets/components/Header";
import SiteHighlights from "../assets/components/SiteHighlights";
import Swiper from "../assets/components/Swiper";

export default function Home() {
  return (
    <>
      <main className="">
        <Header />
        <Swiper />
        <SiteHighlights/>
      </main>
    </>
  );
}
