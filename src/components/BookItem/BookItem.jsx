import classes from "./BookItem.module.css";

function BookItem({ book }) {
  const { book_image, title } = book;
  return (
    <div>
      <img src={book_image} alt={title} className={classes["book-item"]} />
    </div>
  );
}

export default BookItem;
