"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { AuthService } from "@/services/auth/auth";

export interface User {
  id?: string;
  email: string;
  fullName?: string;
  token?: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    fullName: string,
    email: string,
    password: string,
  ) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser({ ...parsedUser, token: storedToken });
        setIsAuthenticated(true);
      } catch (err) {
        console.error("Failed to parse stored user:", err);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await AuthService.login(email, password);

      // Handle response structure from backend
      const userData: User = {
        id: response.id || response.user_id,
        email: response.email || email,
        fullName: response.full_name || response.fullName,
        token: response.token || response.access_token,
      };

      setUser(userData);
      setIsAuthenticated(true);

      // Persist to localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", userData.token || "");
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.detail || err.message || "Login failed";
      setError(errorMessage);
      setIsAuthenticated(false);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(
    async (fullName: string, email: string, password: string) => {
      setLoading(true);
      setError(null);

      try {
        const response = await AuthService.register(fullName, email, password);

        // Handle response structure from backend
        const userData: User = {
          id: response.id || response.user_id,
          email: response.email || email,
          fullName: response.full_name || response.fullName || fullName,
          token: response.token || response.access_token,
        };

        setUser(userData);
        setIsAuthenticated(true);

        // Persist to localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", userData.token || "");
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.detail || err.message || "Registration failed";
        setError(errorMessage);
        setIsAuthenticated(false);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
    setError(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value: AuthContextType = {
    user,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
