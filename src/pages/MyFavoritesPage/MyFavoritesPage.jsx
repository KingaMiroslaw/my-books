import classes from "./MyFavoritesPage.module.css";
import MyFavoriteBookItem from "../../components/MyFavoriteBookItem/MyFavoriteBookItem";
import { useGetFavoriteBookItemQuery } from "../../api/favorites-books-api/favorites-books-api";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader/Loader";

function MyFavoritesPage() {
  const { userInfo } = useSelector((store) => store.auth);
  const { data: favoritesBooks = [], isFetching } = useGetFavoriteBookItemQuery(
    { email: userInfo.email }
  );

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <main className={classes["favorites-page"]}>
          {favoritesBooks.length !== 0 ? (
            favoritesBooks.map((book) => {
              return <MyFavoriteBookItem key={book.id} book={book} />;
            })
          ) : (
            <p className={classes["info-message"]}>No favorites books</p>
          )}
        </main>
      )}
    </>
  );
}

export default MyFavoritesPage;
