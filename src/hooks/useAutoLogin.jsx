import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { setAuthUser, logout } from "../store/auth/auth-slice";
import { useDispatch, useSelector } from "react-redux";

function useAutoLogin() {
  const dispatch = useDispatch();
  const storedToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (storedToken) {
      const decoded = jwt_decode(storedToken);
      const expirationDate = decoded.exp * 1000 - new Date().getTime();
      setTimeout(() => {
        localStorage.removeItem("token");
        dispatch(logout());
      }, expirationDate);
    }
  }, [storedToken, dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      const userEmail = decoded.email;

      if (decoded.exp > new Date().getTime() / 1000) {
        dispatch(
          setAuthUser({
            tokenId: token,
            email: userEmail,
          })
        );
      } else {
        localStorage.removeItem("token");
      }
    }
  }, [dispatch]);
}

export default useAutoLogin;
