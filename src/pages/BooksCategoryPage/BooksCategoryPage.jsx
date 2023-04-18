import { useParams } from "react-router-dom";
import { useGetBooksByCategoryQuery } from "../../api/books-api/books-api";
import classes from "./BooksCategoryPage.module.css";
import Loader from "../../components/Loader/Loader";
import BookItem from "../../components/BookItem/BookItem";
import {
  useAddFavoriteBookItemMutation,
  useGetFavoriteBookItemQuery,
} from "../../api/favorites-books-api/favorites-books-api";
import { useSelector } from "react-redux";

function BooksCategoryPage() {
  const { categoryName } = useParams();
  const { userInfo } = useSelector((store) => store.auth);
  const { data: booksByCategory = [], isFetching } =
    useGetBooksByCategoryQuery(categoryName);
  const [addFavoriteBookItem] = useAddFavoriteBookItemMutation();
  const { data: favoritesBooks = [], refetch } = useGetFavoriteBookItemQuery({
    email: userInfo.email,
  });

  const addBookToMyFavoriteHandler = async ({ book }) => {
    await addFavoriteBookItem({
      email: userInfo.email,
      book,
    });
    await refetch();
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
                isAlreadyAdded={favoritesBooks.some(
                  (favoriteBook) => favoriteBook.title === book.title
                )}
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
