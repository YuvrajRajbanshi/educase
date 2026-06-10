import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AccountSettings from "./pages/AccountSettings";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="mobile-frame">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account-settings" element={<AccountSettings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
