import classes from "./BookItem.module.css";
import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import { useState } from "react";

function BookItem({ book, onAddBookToFavorite, isAlreadyAdded }) {
  const { book_image, title, author, rank, publisher, description, buy_links } =
    book;
  const [bookDetails] = useState({
    image: book_image,
    title: title,
    author: author,
    publisher: publisher,
    description: description,
    buy: buy_links,
  });

  return (
    <div className={classes["book-item"]}>
      <img src={book_image} alt={title} className={classes["book-image"]} />
      <div className={classes["book-info"]}>
        <p className={classes.author}>{author}</p>
        <p className={classes.title}>{title}</p>
        <div className={classes["book-icons"]}>
          <Tooltip anchorId={`book-details-${rank}`} content="Show Details" />
          <Link
            to={"/book-details/" + title}
            id={`book-details-${rank}`}
            state={{ book: bookDetails }}
          >
            <AiOutlineInfoCircle className={classes["details-icon"]} />
          </Link>
          <Tooltip
            anchorId={`favorite-books-${rank}`}
            content="Add to My Favorites"
          />
          <button
            id={`favorite-books-${rank}`}
            disabled={isAlreadyAdded}
            onClick={() => onAddBookToFavorite({ book })}
            className={classes["fav-btn"]}
          >
            <AiOutlineHeart className={classes["fav-icon"]} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
