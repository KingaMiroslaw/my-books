import { Route, Routes } from "react-router-dom";
import BooksPage from "./pages/BooksPage/BooksPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/favorites" element={<FavoritePage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
