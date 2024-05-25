// AuthContext.js
import React, { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();

// Create context provider
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  // Function to set authentication state
  const login = () => {
    setAuthenticated(true);
  };

  // Function to unset authentication state
  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
