import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { ContentArea } from "@/sections/ContentArea";
import { Footer } from "@/sections/Footer";

export const MainContent = () => {
  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.708_0_0_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.708_0_0_/_0.5)] w-full">
        <div className="bg-[hsl(220,40%,8%)] box-border caret-transparent min-h-[952px] outline-[oklab(0.708_0_0_/_0.5)]">
          <Header />
          <HeroSection />
          <ContentArea />
          <Footer />
        </div>
      </div>
    </div>
  );
};
