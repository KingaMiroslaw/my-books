import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BooksPage from "./pages/BooksPage/BooksPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./Layout/Layout/Layout";
import BooksCategoryPage from "./pages/BooksCategoryPage/BooksCategoryPage";
import BooksWelcomePage from "./pages/BooksWelcomePage/BooksWelcomePage";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="books" element={<BooksPage />}>
          <Route index element={<BooksWelcomePage/>} />
          <Route path=":categoryName" element={<BooksCategoryPage />} />
        </Route>
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  ) : (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
