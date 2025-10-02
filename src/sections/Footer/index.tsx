export const Footer = () => {
  return (
    <footer className="bg-[hsl(220,35%,10%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mt-16 border-t border-solid border-[hsl(220,30%,20%)]">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full mx-auto px-4 py-8 md:max-w-screen-xl">
        <div className="box-border caret-transparent gap-x-8 grid grid-cols-none outline-[oklab(0.708_0_0_/_0.5)] gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
            <h4 className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-3">
              Cross Cars
            </h4>
            <p className="text-[hsl(215,20%,65%)] text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
              Quality rental vehicles with transparent pricing and easy booking.
            </p>
          </div>
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
            <h4 className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-3">
              Integration
            </h4>
            <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
              Powered by HQ Rentals Fleet Software for real-time availability
              and seamless reservations.
            </p>
          </div>
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
            <h4 className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-3">
              Contact
            </h4>
            <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
              Need help? Contact our support team for assistance with your
              rental.
            </p>
          </div>
        </div>
        <div className="text-[hsl(215,20%,65%)] text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)] text-center mt-8 pt-8 border-t border-solid border-[hsl(220,30%,20%)]">
          © 2025 Cross Cars. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
