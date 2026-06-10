import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="page-container welcome-page">
      <div className="page-content">
        <div className="welcome-hero" />

        <div className="welcome-card">
          <h1 className="welcome-title">Welcome to PopX</h1>

          <p className="welcome-description">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
