import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/auth-slice";

function HomePage() {
  const dispatch = useDispatch();

  return (
    <main>
      <div>HomePage</div>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </main>
  );
}

export default HomePage;
