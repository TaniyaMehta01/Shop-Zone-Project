import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AUTH_STORAGE_KEY = "shopzone_auth_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem(AUTH_STORAGE_KEY);
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Failed to load user from localStorage", error);
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    } catch (error) {
      console.error("Failed to update auth in localStorage", error);
    }
  }, [user]);

  const loginAsGuest = (guestName = "Guest Shopper") => {
    const guestUser = {
      id: "guest_" + Date.now(),
      name: guestName,
      isGuest: true,
    };
    setUser(guestUser);
    return guestUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loginAsGuest,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

