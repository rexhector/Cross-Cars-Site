import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  provider: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithApple: () => Promise<void>;
  loginWithMicrosoft: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const newUser: User = {
      uid: Math.random().toString(36).substr(2, 9),
      email,
      displayName: email.split("@")[0],
      photoURL: null,
      provider: "email",
    };
    
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const loginWithGoogle = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const newUser: User = {
      uid: Math.random().toString(36).substr(2, 9),
      email: "user@gmail.com",
      displayName: "Google User",
      photoURL: "https://lh3.googleusercontent.com/a/default-user",
      provider: "google",
    };
    
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const loginWithApple = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const newUser: User = {
      uid: Math.random().toString(36).substr(2, 9),
      email: "user@icloud.com",
      displayName: "Apple User",
      photoURL: null,
      provider: "apple",
    };
    
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const loginWithMicrosoft = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const newUser: User = {
      uid: Math.random().toString(36).substr(2, 9),
      email: "user@outlook.com",
      displayName: "Microsoft User",
      photoURL: null,
      provider: "microsoft",
    };
    
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    loading,
    login,
    loginWithGoogle,
    loginWithApple,
    loginWithMicrosoft,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
