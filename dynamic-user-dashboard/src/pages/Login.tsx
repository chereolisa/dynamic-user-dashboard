import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleLogin = (role: "Admin" | "Editor" | "Viewer") => {
    if (!username.trim()) {
      alert("Please enter a username.");
      return;
    }
    login(username, role);
    navigate("/dashboard"); // Redirect after login
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => handleLogin("Admin")}>Login as Admin</button>
      <button onClick={() => handleLogin("Editor")}>Login as Editor</button>
      <button onClick={() => handleLogin("Viewer")}>Login as Viewer</button>
    </div>
  );
};

export default Login;
