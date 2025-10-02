import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loginWithGoogle, loginWithApple, loginWithMicrosoft } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/fleet");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate("/fleet");
    } catch (err) {
      setError("Failed to login with Google");
    } finally {
      setLoading(false);
    }
  };

  const handleAppleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await loginWithApple();
      navigate("/fleet");
    } catch (err) {
      setError("Failed to login with Apple");
    } finally {
      setLoading(false);
    }
  };

  const handleMicrosoftLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await loginWithMicrosoft();
      navigate("/fleet");
    } catch (err) {
      setError("Failed to login with Microsoft");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(220,40%,8%)] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="bg-[hsl(210,100%,50%)] p-3 rounded-xl">
              <img
                src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-4.svg"
                alt="Logo"
                className="w-8 h-8"
              />
            </div>
          </div>
          <h1 className="text-3xl font-medium mb-2">Welcome to Cross Cars</h1>
          <p className="text-[hsl(215,20%,65%)]">
            Sign in to access your account and book vehicles
          </p>
        </div>

        <div className="bg-[hsl(220,35%,12%)] rounded-lg p-8 border border-[hsl(220,30%,20%)]">
          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-3 mb-6">
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <button
              onClick={handleAppleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black hover:bg-gray-900 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Continue with Apple
            </button>

            <button
              onClick={handleMicrosoftLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[hsl(220,30%,18%)] hover:bg-[hsl(220,30%,20%)] text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium border border-[hsl(220,30%,20%)]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
              </svg>
              Continue with Microsoft
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[hsl(220,30%,20%)]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[hsl(220,35%,12%)] text-[hsl(215,20%,65%)]">
                Or continue with email
              </span>
            </div>
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-2 bg-[hsl(220,30%,18%)] border border-[hsl(220,30%,20%)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(210,100%,50%)] text-white placeholder-[hsl(215,20%,65%)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 bg-[hsl(220,30%,18%)] border border-[hsl(220,30%,20%)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(210,100%,50%)] text-white placeholder-[hsl(215,20%,65%)]"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[hsl(220,30%,20%)] bg-[hsl(220,30%,18%)] text-[hsl(210,100%,50%)] focus:ring-[hsl(210,100%,50%)]"
                />
                <span className="text-[hsl(215,20%,65%)]">Remember me</span>
              </label>
              <a
                href="#"
                className="text-[hsl(210,100%,50%)] hover:text-[hsl(210,100%,45%)]"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[hsl(210,100%,50%)] hover:bg-[hsl(210,100%,45%)] disabled:bg-[hsl(220,30%,20%)] disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="text-center text-sm text-[hsl(215,20%,65%)] mt-6">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-[hsl(210,100%,50%)] hover:text-[hsl(210,100%,45%)] font-medium"
            >
              Sign up
            </a>
          </p>
        </div>

        <p className="text-center text-xs text-[hsl(215,20%,65%)] mt-6">
          By continuing, you agree to our{" "}
          <a href="#" className="underline hover:text-white">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-white">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};
