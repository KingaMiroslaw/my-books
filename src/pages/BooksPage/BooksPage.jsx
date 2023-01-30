import { Outlet } from "react-router-dom";
import classes from "./BooksPage.module.css";
import { NavLink } from "react-router-dom";

function BooksPage() {
  return (
    <main className={classes["books-page"]}>
      <nav className={classes["books-categories"]}>
        <NavLink to="hardcover-fiction" className={classes["category-link"]}>
          fiction
        </NavLink>
        <NavLink to="hardcover-nonfiction" className={classes["category-link"]}>
          nonfiction
        </NavLink>
        <NavLink to="health" className={classes["category-link"]}>
          health
        </NavLink>
        <NavLink to="science" className={classes["category-link"]}>
          science
        </NavLink>
        <NavLink to="business-books" className={classes["category-link"]}>
          business
        </NavLink>
      </nav>
      <section className={classes["outlet-container"]}>
        <Outlet />
      </section>
    </main>
  );
}

export default BooksPage;
