import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import classes from "./BookDetailsPage.module.css";

function BookDetailsPage() {
  const location = useLocation();
  const book = location.state?.book;
  const { image, title, author, publisher, description, buy } = book;
  const navigate = useNavigate();
  const buyUrl = buy[0].url;

  const titleChange = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  };

  if (!book) return <Navigate to={-1} />;

  return (
    <main className={classes["book-details"]}>
      <div>
        <img src={image} alt={title} className={classes["book-image"]} />
      </div>
      <div className={classes["book-container"]}>
        <div className={classes["return-icon"]}>
          <p className={classes["return-message"]}>go back</p>
          <BsArrowReturnLeft
            onClick={() => navigate(-1)}
            className={classes.icon}
          />
        </div>
        <div className={classes["info-container"]}>
          <div className={classes["book-information"]}>
            <p className={classes["book-info"]}>Author </p>
            <p>{author}</p>
          </div>
          <div className={classes["book-information"]}>
            <p className={classes["book-info"]}>Title </p>
            <p>{titleChange(title)}</p>
          </div>
          <div className={classes["book-information"]}>
            <p className={classes["book-info"]}>Publisher </p>
            <p>{publisher}</p>
          </div>
        </div>
        {description ? (
          <div className={classes["book-description"]}>{description}</div>
        ) : null}
        <div className={classes["btn-container"]}>
          <button className={classes["shop-btn"]} type="button">
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes["shop-link"]}
            >
              <HiOutlineShoppingCart className={classes["shop-icon"]} />
              shop
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}

export default BookDetailsPage;
