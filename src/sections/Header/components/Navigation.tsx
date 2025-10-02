export const Navigation = () => {
  return (
    <nav className="items-center box-border caret-transparent gap-x-6 hidden min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 md:flex md:min-h-[auto] md:min-w-[auto]">
      <a
        href="#fleet"
        className="text-gray-500 box-border caret-transparent inline min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] md:block md:min-h-[auto] md:min-w-[auto]"
      >
        Fleet
      </a>
      <a
        href="#about"
        className="text-gray-500 box-border caret-transparent inline min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] md:block md:min-h-[auto] md:min-w-[auto]"
      >
        About
      </a>
      <a
        href="#contact"
        className="text-gray-500 box-border caret-transparent inline min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] md:block md:min-h-[auto] md:min-w-[auto]"
      >
        Contact
      </a>
    </nav>
  );
};
