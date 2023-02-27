import classes from "./MyFavoriteBookItem.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { changeTitleToCapitalize } from "../../utils/utils";

function MyFavoriteBookItem({ book, deleteBook }) {
  const { author, title, publisher, description, picture, id } = book;

  return (
    <div className={classes["favorite-book-container"]}>
      <div className={classes["book-container"]}>
        <img src={picture} alt={title} className={classes["book-image"]} />
      </div>
      <div className={classes["info-container"]}>
        <div className={classes["info-items"]}>
          <div>
            <p>Author: {author}</p>
            <p>Title: {changeTitleToCapitalize(title)}</p>
            <p>Publisher: {publisher}</p>
          </div>

          <div className={classes["delete-item"]}>
            <p className={classes["delete-message"]}>delete book</p>
            <RiDeleteBinLine
              className={classes["delete-icon"]}
              onClick={() => deleteBook({ id })}
            />
          </div>
        </div>

        {description ? (
          <div className={classes["description-container"]}>
            <p>{description}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MyFavoriteBookItem;
