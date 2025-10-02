export const HeroSection = () => {
  return (
    <section className="bg-[hsl(220,35%,10%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border-b border-solid border-[hsl(220,30%,20%)]">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] text-center w-full mx-auto px-4 py-12 md:max-w-screen-xl md:py-16">
        <h1 className="text-2xl font-medium box-border caret-transparent leading-9 outline-[oklab(0.708_0_0_/_0.5)] mb-4">
          Find Your Perfect Rental
        </h1>
        <p className="text-[hsl(215,20%,65%)] box-border caret-transparent max-w-2xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
          Browse our fleet of quality vehicles with transparent pricing. Select
          your preferences and see only the cars that match what you need.
        </p>
      </div>
    </section>
  );
};
