import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { GrReturn } from "react-icons/gr";

function BookDetailsPage() {
  const location = useLocation();
  const book = location.state?.book;
  const { image, title, author, publisher, description } = book;
  const navigate = useNavigate();

  if (!book) return <Navigate to={-1} />;

  return (
    <main>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <GrReturn onClick={() => navigate(-1)} />
        <div>
          {author} - {title}
        </div>
        <div>{description}</div>
        <div>Publisher: {publisher}</div>
      </div>
    </main>
  );
}

export default BookDetailsPage;
