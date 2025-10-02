import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export const Logo = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleClick = () => {
    if (user) {
      navigate("/fleet");
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 ${user ? 'cursor-pointer' : ''}`}
    >
      <div className="bg-[hsl(210,100%,50%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] p-2 rounded-[10px]">
        <img
          src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-4.svg"
          alt="Icon"
          className="text-[oklch(1_0_0)] box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
        />
      </div>
      <span className="font-medium box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)]">
        Cross Cars
      </span>
    </div>
  );
};
