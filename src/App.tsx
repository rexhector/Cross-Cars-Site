import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { LoginPage } from "@/pages/LoginPage";
import { TopBar } from "@/sections/TopBar";
import { MainContent } from "@/sections/MainContent";
import { BookingPage } from "@/pages/BookingPage";
import { ConfirmationPage } from "@/pages/ConfirmationPage";
import { SuccessPage } from "@/pages/SuccessPage";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="text-[hsl(210,40%,98%)] text-base not-italic normal-nums font-normal accent-auto bg-[hsl(220,40%,8%)] box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[oklab(0.708_0_0_/_0.5)] text-left indent-[0px] normal-case visible border-separate font-ui_sans_serif min-h-screen">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route
              path="/fleet"
              element={
                <ProtectedRoute>
                  <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                    <div className="box-border caret-transparent h-[952px] outline-[oklab(0.708_0_0_/_0.5)] translate-y-12">
                      <TopBar />
                      <MainContent />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/booking/:id"
              element={
                <ProtectedRoute>
                  <BookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/confirmation"
              element={
                <ProtectedRoute>
                  <ConfirmationPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/success"
              element={
                <ProtectedRoute>
                  <SuccessPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};
