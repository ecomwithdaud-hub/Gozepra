"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { PORTAL_USERS } from "@/lib/portal-data";

const PortalAuthContext = createContext({
  currentUser: null,
  loginAs: (role) => {},
  logout: () => {},
  registerUser: (data) => {},
});

export function PortalAuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check localStorage for saved session, default to CEO for easy test access if null
    try {
      const saved = localStorage.getItem("zepra_portal_session");
      if (saved) {
        setCurrentUser(JSON.parse(saved));
      } else {
        // Default to Daud Lashari (CEO)
        const defaultUser = PORTAL_USERS[0];
        setCurrentUser(defaultUser);
        localStorage.setItem("zepra_portal_session", JSON.stringify(defaultUser));
      }
    } catch (e) {
      setCurrentUser(PORTAL_USERS[0]);
    }
    setIsLoaded(true);
  }, []);

  const loginAs = (role) => {
    const user = PORTAL_USERS.find((u) => u.role === role) || PORTAL_USERS[0];
    setCurrentUser(user);
    try {
      localStorage.setItem("zepra_portal_session", JSON.stringify(user));
    } catch (e) {}
  };

  const logout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem("zepra_portal_session");
    } catch (e) {}
  };

  const registerUser = (userData) => {
    const newUser = {
      id: `usr-${Date.now()}`,
      name: userData.name,
      email: userData.email,
      role: userData.role || "employee",
      title: userData.title || "Junior Developer",
      avatar: "👤",
      department: userData.department || "Engineering",
      securityClearance: "Level 1 (Pending Review)",
      status: "Active",
    };
    setCurrentUser(newUser);
    try {
      localStorage.setItem("zepra_portal_session", JSON.stringify(newUser));
    } catch (e) {}
    return newUser;
  };

  return (
    <PortalAuthContext.Provider
      value={{
        currentUser,
        isLoaded,
        loginAs,
        logout,
        registerUser,
      }}
    >
      {children}
    </PortalAuthContext.Provider>
  );
}

export function usePortalAuth() {
  const context = useContext(PortalAuthContext);
  if (!context) {
    throw new Error("usePortalAuth must be used within a PortalAuthProvider");
  }
  return context;
}
