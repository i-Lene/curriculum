import CustomCarrousel from "../UI/CustomCarrousel";
import classes from "./PortfolioPage.module.scss";
import ferronato from "/projects/ferronato.png";
import lusoracks from "/projects/lusoracks.png";
import mstore from "/projects/mstore.png";
import navigator from "/projects/navigator.png";
import tmc from "/projects/tmc.png";
import eternal from "/projects/eternal.png";
import Project from "./Project";

const SLIDES = [
  <Project
    img={ferronato}
    title="Ferronato"
    link={"https://www.ferronato-switzerland.com/en-eu/"}
  />,
  <Project
    img={lusoracks}
    title="Lusoracks"
    link={"https://www.lusoracks.com/"}
  />,
  <Project img={mstore} title="MStore" link={"https://www.mstore.pt/pt/"} />,
  <Project
    img={navigator}
    title="Navigator"
    link={"https://clubeprodutoresflorestais.com/"}
  />,
  <Project
    img={tmc}
    title="TMC"
    link={"https://tropicalmarinecentre.com/ib/"}
  />,
  <Project
    img={eternal}
    title="Eternal & Modern"
    link={"https://www.eternalandmodern.com/"}
  />,
];

function PortfolioPage() {
  return (
    <div className={classes.portfolio__main}>
      <h1>Portfolio</h1>
      <div className={classes.projects__description}>
        <p>
          Hey there! I'm so happy you're here. I've had the chance to be part of
          some really exciting projects with my amazing team at work, and you
          can take a peek at a few of them above.
        </p>
        <p>
          This page is still a work in progress, though—I’m planning to add more
          soon, especially some personal projects I’ve been working on.
        </p>
        <p>
          Thanks for stopping by, and I hope you’ll check back later when
          everything’s a bit more complete!
        </p>
      </div>

      <CustomCarrousel slides={SLIDES} slidesToScroll={3} slidesToShow={3} />
    </div>
  );
}

export default PortfolioPage;
