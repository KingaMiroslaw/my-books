import { useEffect, useState } from "react";
import {
  useGetFictionBooksQuery,
  useGetNonfictionBooksQuery,
} from "../../api/books-api/books-api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import classes from "./BooksWelcomePage.module.css";
import Loader from "../../components/Loader/Loader";

function BooksWelcomePage() {
  const [maxSliderItems, setMaxSliderItems] = useState(5);

  const { data: fictionBooks = [], isFetching: isFictionBooksFetching } =
    useGetFictionBooksQuery();
  const { data: nonfictionBooks = [], isFetching: isNonfictionBooksFetching } =
    useGetNonfictionBooksQuery();

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
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {isFictionBooksFetching && isNonfictionBooksFetching ? (
        <Loader />
      ) : (
        <div>
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
        </div>
      )}
    </>
  );
}

export default BooksWelcomePage;
