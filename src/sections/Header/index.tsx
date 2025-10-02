import { Logo } from "@/sections/Header/components/Logo";
import { Navigation } from "@/sections/Header/components/Navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky bg-[hsl(220,35%,12%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-50 border-b border-solid border-[hsl(220,30%,20%)] top-0">
      <div className="items-center box-border caret-transparent flex justify-between max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full mx-auto p-4 md:max-w-screen-xl">
        <Logo />
        <div className="flex items-center gap-6">
          <Navigation />
          {user && (
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <div className="text-sm">
                  <p className="font-medium">{user.displayName}</p>
                  <p className="text-[hsl(215,20%,65%)] text-xs">{user.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="text-sm font-medium px-4 py-2 bg-[hsl(220,30%,18%)] hover:bg-[hsl(220,30%,20%)] rounded-lg transition-colors border border-[hsl(220,30%,20%)]"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
