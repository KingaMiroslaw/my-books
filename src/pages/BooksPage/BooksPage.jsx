import React, { useEffect, useState } from "react";
import {
  useGetFictionBooksQuery,
  useGetNonfictionBooksQuery,
} from "../../api/books-api/books-api";
import classes from "./BooksPage.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { NavLink } from "react-router-dom";

function BooksPage() {
  const [maxSliderItems, setMaxSliderItems] = useState(5);

  const { data: fictionBooks = [] } = useGetFictionBooksQuery();
  const { data: nonfictionBooks = [] } = useGetNonfictionBooksQuery();

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
    <main className={classes["books-page"]}>
      <nav className={classes["books-categories"]}>
        <NavLink className={classes["category-link"]}>fiction</NavLink>
        <NavLink className={classes["category-link"]}>nonfiction</NavLink>
        <NavLink className={classes["category-link"]}>health</NavLink>
        <NavLink className={classes["category-link"]}>science</NavLink>
        <NavLink className={classes["category-link"]}>business</NavLink>
      </nav>
      <section className={classes["slider-container"]}>
        <Splide
          options={{
            perPage: maxSliderItems,
            arrows: true,
            pagination: true,
            perMove: 1,
          }}
        >
          {fictionBooks.map((book) => {
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
          {nonfictionBooks.map((book) => {
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
  );
}

export default BooksPage;
