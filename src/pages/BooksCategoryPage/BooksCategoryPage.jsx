import { useParams } from "react-router-dom";
import { useGetBooksByCategoryQuery } from "../../api/books-api/books-api";
import classes from "./BooksCategoryPage.module.css";
import Loader from "../../components/Loader/Loader/Loader";
import BookItem from "../../components/BookItem/BookItem";

function BooksCategoryPage() {
  const { categoryName } = useParams();
  const { data: booksByCategory = [], isFetching } =
    useGetBooksByCategoryQuery(categoryName);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <div className={classes["books-container"]}>
          {booksByCategory.map((book) => {
            return <BookItem book={book} key={book.rank} />;
          })}
        </div>
      )}
    </>
  );
}

export default BooksCategoryPage;
