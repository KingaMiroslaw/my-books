import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/books-lover.svg";
import classes from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={classes["home-page"]}>
      <div className={classes["links-container"]}>
        <Link className={classes.link} to="/favorites">
          <h4>My Favorites</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam
            enim deleniti quibusdam ad tempore nulla modi soluta nemo iste.
          </p>
        </Link>
        <Link className={classes.link} to="/books">
          <h4>Books</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam
            enim deleniti quibusdam ad tempore nulla modi soluta nemo iste.
            Lorem ipsum dolor sit amet.
          </p>
        </Link>
      </div>
      <div>
        <img src={img} alt="books lover" className={classes.image} />
      </div>
    </main>
  );
}

export default HomePage;
