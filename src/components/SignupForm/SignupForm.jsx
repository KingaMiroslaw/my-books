import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  BsFillPersonPlusFill,
  BsFillPersonFill,
  BsEyeSlash,
} from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import classes from "./SignupForm.module.css";
import { useSignUpUserMutation } from "../../api/auth-api/auth-api";
import { setAuthUser } from "../../store/auth/auth-slice";

function SignupForm({ onShow }) {
  const dispatch = useDispatch();

  const [passwordShown, setPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [signUpUser] = useSignUpUserMutation();

  const onSubmit = (data) => {
    signUpUser({
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    })
      .unwrap()
      .then((response) => {
        console.log(response);
        dispatch(setAuthUser(response));
      })
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <form
      className={classes["form-container"]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <BsFillPersonPlusFill className={classes.icon} />
      <div className={classes["text-field"]}>
        <div className={classes["input-container"]}>
          <BsFillPersonFill className={classes["input-icon"]} />
          <input
            type="email"
            className={classes["form-input"]}
            placeholder="E-mail"
            {...register("email", {
              required: "Required value",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
        </div>
        <div className={classes["error-msg"]}>
          {errors?.emailAddress ? <p>{errors.emailAddress.message}</p> : null}
        </div>
        <div className={classes["input-container"]}>
          <RiLockPasswordLine className={classes["input-icon"]} />
          <input
            type="password"
            className={classes["form-input"]}
            placeholder="Create Password"
            {...register("password", {
              required: "Required value!",
              minLength: { value: 6, message: "Minimal length is 6!" },
              deps: ["confirmPassword"],
            })}
          />
        </div>
        <div className={classes["error-msg"]}>
          {errors?.password ? <p>{errors.password.message}</p> : null}
        </div>
        <div className={classes["input-container"]}>
          <RiLockPasswordLine className={classes["input-icon"]} />
          <input
            type={passwordShown ? "text" : "password"}
            className={classes["form-input"]}
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Required value!",
              validate: (value) => {
                const password = getValues("password");
                return password === value || "Password should match";
              },
            })}
          />
          <button
            onClick={togglePassword}
            type="button"
            className={classes["show-btn"]}
          >
            <BsEyeSlash className={classes["show-icon"]} />
          </button>
        </div>
        <div className={classes["error-msg"]}>
          {errors?.confirmPassword ? (
            <p>{errors.confirmPassword.message}</p>
          ) : null}
        </div>
      </div>
      <div type="submit">
        <button className={classes["submit-btn"]}>SIGN UP</button>
      </div>
      <div className={classes.info}>
        <p>Already a member?</p>
        <button
          type="button"
          className={classes["login-btn"]}
          onClick={() => onShow()}
        >
          Log in
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
