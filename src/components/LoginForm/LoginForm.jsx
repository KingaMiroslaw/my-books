import React from "react";
import classes from "./LoginForm.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useAuthUserMutation } from "../../api/auth-api/auth-api";
import { setAuthUser } from "../../store/auth/auth-slice";

function LoginForm({ onShow }) {
  const dispatch = useDispatch();

  const [showError, setShowError] = useState(false);

  const { register, handleSubmit } = useForm();
  const [authUser] = useAuthUserMutation();

  const onSubmit = (data) => {
    setShowError(false);

    authUser({
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    })
      .unwrap()
      .then((response) => {
        localStorage.setItem("token", response.idToken);
        dispatch(setAuthUser(response));
      })
      .catch((error) => {});
  };

  const onError = () => {
    setShowError(true);
  };

  return (
    <form
      className={classes["form-container"]}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <IoPersonCircleOutline className={classes.icon} />
      <div className={classes["text-field"]}>
        <div className={classes["input-container"]}>
          <BsFillPersonFill className={classes["input-icon"]} />
          <input
            type="email"
            className={classes["form-input"]}
            placeholder="E-mail"
            {...register("email", {
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              },
            })}
          />
        </div>
        <div className={classes["input-container"]}>
          <RiLockPasswordLine className={classes["input-icon"]} />
          <input
            type="password"
            className={classes["form-input"]}
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />
        </div>
        <div className={classes["error-msg"]}>
          <p>{showError ? "Please enter a valid data" : null}</p>
        </div>
      </div>
      <div type="submit">
        <button className={classes["submit-btn"]}>LOGIN</button>
      </div>
      <div className={classes.info}>
        <p>Not a member?</p>
        <button
          type="button"
          className={classes["signup-btn"]}
          onClick={() => onShow()}
        >
          Sign up
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
