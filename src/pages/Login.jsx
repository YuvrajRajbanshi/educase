import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account-settings");
  };

  return (
    <div className="page-container login-page">
      <div className="page-content">
        <div className="form-header">
          <h1 className="form-title">
            Signin to your
            <br />
            PopX account
          </h1>

          <p className="form-description">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-input"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
