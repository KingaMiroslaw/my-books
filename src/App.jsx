import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import BooksPage from "./pages/BooksPage/BooksPage";
import MyFavoritesPage from "./pages/MyFavoritesPage/MyFavoritesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./Layout/Layout";
import BooksCategoryPage from "./pages/BooksCategoryPage/BooksCategoryPage";
import BooksWelcomePage from "./pages/BooksWelcomePage/BooksWelcomePage";
import BookDetailsPage from "./pages/BookDetailsPage/BookDetailsPage";
import useAutoLogin from "./hooks/useAutoLogin";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();
  useAutoLogin();

  return isAuthenticated ? (
    <Layout>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="books" element={<BooksPage />}>
          <Route index element={<BooksWelcomePage />} />
          <Route path=":categoryName" element={<BooksCategoryPage />} />
        </Route>
        <Route path="my-favorites" element={<MyFavoritesPage />} />
        <Route path="book-details/:title" element={<BookDetailsPage />} />
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
