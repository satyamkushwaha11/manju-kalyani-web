import Footer from "../components/footer";
import MainHeader from "../components/header/MainHeader";
import TopHeader from "../components/header/TopHeader";
import SimpleSlider from "../components/slider";

export default function Home() {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <SimpleSlider />
      <div className=" my-5">bbdy</div>
     
      <Footer />
    </>
  );
}
