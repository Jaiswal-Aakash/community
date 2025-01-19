import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import Card from "./components/Card/Card";
import Auth from "./pages/Auth/Auth";
import Protected from "./components/Protected";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token")); // Manage token state here

  useEffect(() => {
    // Check for token in localStorage and set it on page reload
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" exact element={<Auth setToken={setToken} />} />
        <Route path="/card" exact element={<Card />} />
        {/* Pass token to Protected route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute element={<Profile token={token} />} token={token} />
          }
        />
        <Route
          path="/protected"
          element={<ProtectedRoute element={<Protected />} token={token} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
