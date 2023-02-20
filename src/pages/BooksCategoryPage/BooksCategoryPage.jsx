import { useParams } from "react-router-dom";
import { useGetBooksByCategoryQuery } from "../../api/books-api/books-api";
import classes from "./BooksCategoryPage.module.css";
import Loader from "../../components/Loader/Loader/Loader";
import BookItem from "../../components/BookItem/BookItem";
import { useAddFavoriteBookItemMutation } from "../../api/favorites-books-api/favorites-books-api";
import { useSelector } from "react-redux";

function BooksCategoryPage() {
  const { categoryName } = useParams();
  const { data: booksByCategory = [], isFetching } =
    useGetBooksByCategoryQuery(categoryName);
  const [addFavoriteBookItem] = useAddFavoriteBookItemMutation();

  const { userInfo } = useSelector((store) => store.auth);

  const addBookToMyFavoriteHandler = ({ book }) => {
    addFavoriteBookItem({
      email: userInfo.email,
      book,
    });
  };

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <div className={classes["books-container"]}>
          {booksByCategory.map((book) => {
            return (
              <BookItem
                book={book}
                key={book.rank}
                onAddBookToFavorite={addBookToMyFavoriteHandler}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default BooksCategoryPage;
