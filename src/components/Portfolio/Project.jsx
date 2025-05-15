import classes from "./PortfolioPage.module.scss";

function Project({ img, title, link }) {
  return (
    <>
      <div className={classes.project}>
        <a href={link} target="_blank" className={classes.imgContainer}>
          <img src={img} />
        </a>
        <a href={link} target="_blank">
          <h2>{title}</h2>
        </a>
      </div>
    </>
  );
}

export default Project;
