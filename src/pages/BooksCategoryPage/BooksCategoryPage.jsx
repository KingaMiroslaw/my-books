import { useParams } from "react-router-dom";
import { useGetBooksByCategoryQuery } from "../../api/books-api/books-api";
import classes from "./BooksCategoryPage.module.css";
import Loader from "../../components/Loader/Loader/Loader";

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
            const { book_image, rank, title } = book;
            return (
              <div key={rank}>
                <img
                  src={book_image}
                  alt={title}
                  className={classes["book-image"]}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default BooksCategoryPage;
