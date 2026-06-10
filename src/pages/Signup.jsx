import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, isAgency: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account-settings");
  };

  return (
    <div className="page-container signup-page">
      <div className="page-content">
        <div className="form-header">
          <h1 className="form-title">
            Create your
            <br />
            PopX account
          </h1>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name<span className="required-asterisk">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone number<span className="required-asterisk">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address<span className="required-asterisk">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password<span className="required-asterisk">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="company" className="form-label">
              Company name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Are you an Agency?<span className="required-asterisk">*</span>
            </label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.isAgency === true}
                  onChange={() => handleRadioChange(true)}
                />
                <span className="radio-custom" />
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.isAgency === false}
                  onChange={() => handleRadioChange(false)}
                />
                <span className="radio-custom" />
                No
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
