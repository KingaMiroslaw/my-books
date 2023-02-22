import classes from "./MyFavoritesPage.module.css";
import { useGetFavoriteBookItemQuery } from "../../api/favorites-books-api/favorites-books-api";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader/Loader";

function MyFavoritesPage() {
  const { userInfo } = useSelector((store) => store.auth);
  const { data: FavoritesBooks = [], isFetching } = useGetFavoriteBookItemQuery(
    { email: userInfo.email }
  );

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <main className={classes["favorites-page"]}>
          {FavoritesBooks.map((book) => {
            return (
              <div key={book.id}>
                <img src={book.picture} alt={book.title} />
              </div>
            );
          })}
        </main>
      )}
    </>
  );
}

export default MyFavoritesPage;
