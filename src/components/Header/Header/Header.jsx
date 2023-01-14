import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/auth/auth-slice";
import classes from "./Header.module.css";
import { FaBars } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

function Header() {
  const dispatch = useDispatch();
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 650) {
        setShowLinks(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className={classes["header-container"]}>
      <div className={classes["header-centered"]}>
        <div className={classes["small-header"]}>
          <h1 className={classes.logo}>MyBooks</h1>
          <button
            className={classes["header-toggle"]}
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        {showLinks ? (
          <nav>
            <ul className={classes.links}>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          backgroundColor: "rgba(175, 172, 172, 0.541)",
                          paddingLeft: "1.5rem",
                        }
                      : undefined
                  }
                  className={classes["link-item"]}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="favorites"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          backgroundColor: "rgba(175, 172, 172, 0.541)",
                          paddingLeft: "1.5rem",
                        }
                      : undefined
                  }
                  className={classes["link-item"]}
                >
                  My Favorites
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="books"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          backgroundColor: "rgba(175, 172, 172, 0.541)",
                          paddingLeft: "1.5rem",
                        }
                      : undefined
                  }
                  className={classes["link-item"]}
                >
                  Books
                </NavLink>
              </li>
              <button
                className={classes["link-btn"]}
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            </ul>
          </nav>
        ) : null}
        <nav>
          <ul className={classes["links-centered"]}>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "rgb(175, 172, 172)",
                        fontWeight: "bold",
                        borderColor: "rgb(175, 172, 172)",
                        borderBottom: "3px solid",
                      }
                    : undefined
                }
                className={classes["link"]}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="favorites"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "rgb(175, 172, 172)",
                        fontWeight: "bold",
                        borderColor: "rgb(175, 172, 172)",
                        borderBottom: "3px solid",
                      }
                    : undefined
                }
                className={classes["link"]}
              >
                My Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="books"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "rgb(175, 172, 172)",
                        fontWeight: "bold",
                        borderColor: "rgb(175, 172, 172)",
                        borderBottom: "3px solid",
                      }
                    : undefined
                }
                className={classes["link"]}
              >
                Books
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.logout}>
          <button
            className={classes["logout-btn"]}
            onClick={() => dispatch(logout())}
          >
            Logout <MdOutlineLogout className={classes["logout-icon"]} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
