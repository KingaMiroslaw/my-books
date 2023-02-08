import { useNavigate } from "react-router-dom";
import { GrReturn } from "react-icons/gr";

function BookDetailsPage() {
  const navigate = useNavigate();

  return (
    <main>
      <p>Book Details</p>
      <div>
        <GrReturn onClick={() => navigate(-1)} />
      </div>
    </main>
  );
}

export default BookDetailsPage;
