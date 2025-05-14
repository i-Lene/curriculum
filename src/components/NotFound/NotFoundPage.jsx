import notFoundImg from "/images/notfound.png";
import classes from "./NotFound.module.scss";
import { Link } from "react-router";
import CustomButton from "../UI/CustomButton";

function NotFoundPage() {
  return (
    <div className={classes.notfound}>
      <div className={classes.notFoundImage}>
        <img src={notFoundImg} alt="Not Found" />
      </div>

      <div className={classes.notFoundText}>
        <h1>Page not found!</h1>
        <p>Oops! Looks like something went purr-etty wrong.</p>
        <CustomButton>
          <Link to="/">
            <span>Back to Home</span>
          </Link>
        </CustomButton>
      </div>
    </div>
  );
}

export default NotFoundPage;
