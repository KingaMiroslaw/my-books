import classes from "./BookItem.module.css";
import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";
import { Tooltip } from "react-tooltip";

function BookItem({ book }) {
  const { book_image, title, author, rank } = book;
  return (
    <div className={classes["book-item"]}>
      <img src={book_image} alt={title} className={classes["book-image"]} />
      <div className={classes["book-info"]}>
        <p className={classes.author}>{author}</p>
        <p className={classes.title}>{title}</p>
        <div className={classes["book-icons"]}>
          <Tooltip anchorId={`book-details-${rank}`} content="Show Details" />
          <div id={`book-details-${rank}`}>
            <AiOutlineInfoCircle
              className={classes["details-icon"]}
              onClick={() => console.log("show details")}
            />
          </div>
          <Tooltip
            anchorId={`favorite-books-${rank}`}
            content="Add to My Favorites"
          />
          <div id={`favorite-books-${rank}`}>
            <AiOutlineHeart
              className={classes["fav-icon"]}
              onClick={() => console.log("add to my favorite")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
