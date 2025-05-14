import CustomCarrousel from "../UI/CustomCarrousel";
import classes from "./PortfolioPage.module.scss";

const SLIDES = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

function PortfolioPage() {
  return (
    <>
      <CustomCarrousel slides={SLIDES} slidesToScroll={3} />
    </>
  );
}

export default PortfolioPage;
