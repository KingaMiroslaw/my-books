import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BooksPage from "./pages/BooksPage/BooksPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Routes>
      <Route path="/" element={<>home page</>} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/favorites" element={<FavoritePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
