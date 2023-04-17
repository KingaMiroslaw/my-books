import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/books-lover.svg";
import classes from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={classes["home-page"]}>
      <div className={classes["links-container"]}>
        <Link className={classes.link} to="/my-favorites">
          <h4>My Favorites</h4>
          <p>Already have your book favorites?</p>
          <p>Come in and remind yourself of your favorite books.</p>
        </Link>
        <Link className={classes.link} to="/books">
          <h4>Books</h4>
          <p> Want to discover new books? </p>
          <p>Choose from five categories and find a new interesting one.</p>
        </Link>
      </div>
      <div>
        <img src={img} alt="books lover" className={classes.image} />
      </div>
    </main>
  );
}

export default HomePage;
