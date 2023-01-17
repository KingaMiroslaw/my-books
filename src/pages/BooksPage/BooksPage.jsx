import React, { useEffect, useState } from "react";
import {
  useGetFictionQuery,
  useGetNonfictionQuery,
} from "../../api/books-api/books-api";
import classes from "./BooksPage.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function BooksPage() {
  const [maxSliderItems, setMaxSliderItems] = useState(5);

  const { fiction } = useGetFictionQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      fiction: data ? data.results.books : [],
      data,
      ...rest,
    }),
  });

  const { nonfiction } = useGetNonfictionQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      nonfiction: data ? data.results.books : [],
      data,
      ...rest,
    }),
  });

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 550) {
        setMaxSliderItems(2);
      } else if (window.innerWidth <= 800) {
        setMaxSliderItems(3);
      } else if (window.innerWidth <= 1000) {
        setMaxSliderItems(4);
      } else if (window.innerWidth >= 1400) {
        setMaxSliderItems(5);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <main className={classes["books-page"]}>
        <section className={classes["books-category"]}>
          <h2>books page</h2>
        </section>
        <section className={classes["slider-container"]}>
          <Splide
            options={{
              perPage: maxSliderItems,
              arrows: true,
              pagination: true,
              perMove: 1,
            }}
          >
            {fiction.map((book) => {
              const { book_image, rank, title } = book;

              return (
                <SplideSlide key={rank}>
                  <img
                    src={book_image}
                    alt={title}
                    className={classes["book-image"]}
                  />
                </SplideSlide>
              );
            })}
          </Splide>
          <Splide
            options={{
              perPage: maxSliderItems,
              arrows: true,
              pagination: true,
              perMove: 1,
            }}
          >
            {nonfiction.map((book) => {
              const { book_image, rank, title } = book;

              return (
                <SplideSlide key={rank}>
                  <img
                    src={book_image}
                    alt={title}
                    className={classes["book-image"]}
                  />
                </SplideSlide>
              );
            })}
          </Splide>
        </section>
      </main>
    </>
  );
}

export default BooksPage;
