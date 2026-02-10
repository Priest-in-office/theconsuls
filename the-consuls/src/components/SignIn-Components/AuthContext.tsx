import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

export interface User {
  email: string;
  name?: string;
  dateOfBirth?: string;
}

export interface SignUpData {
  email: string;
  password: string;
  name: string;
  dateOfBirth: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthReady: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignUpData) => Promise<void>;
  logout: () => void;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

async function authFetch(endpoint: string, body: object) {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (err) {
    if (err instanceof TypeError && err.message === "Failed to fetch") {
      throw new Error("Cannot connect to server. Check if your API is running.");
    }
    throw err;
  }
}


export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      const savedEmail = localStorage.getItem("userEmail");

      if (token && savedEmail) {
        try {
          setUser({ email: savedEmail })
        } catch {
          localStorage.removeItem("token");
          localStorage.removeItem("userEmail");
        }
      }
      setIsAuthReady(true);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await authFetch("/login", { email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("userEmail", email);
      setUser({ email });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Invalid email or password";
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (data: SignUpData) => {
    setIsLoading(true);
    setError(null);
    try {
      await authFetch("/signup", {
        fullname: data.name,
        email: data.email,
        password: data.password, 
        dob: data.dateOfBirth,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to create account";
      if (!error) {
        setError(message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setUser(null);
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthReady, clearError, login, signup, logout, error }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}