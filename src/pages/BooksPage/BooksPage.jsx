import React from "react";
import { useGetFictionQuery } from "../../api/books-api/books-api";

function BooksPage() {
  const { fiction } = useGetFictionQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      fiction: data ? data.results.books : [],
      data,
      ...rest,
    }),
  });

  console.log(fiction); //delete

  return (
    <>
      <main>
        {fiction.map((book) => {
          const { book_image, rank, title } = book;
          return (
            <div key={rank}>
              <img src={book_image} alt={title} />
            </div>
          );
        })}
      </main>
    </>
  );
}

export default BooksPage;
