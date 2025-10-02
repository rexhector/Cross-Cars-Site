export const TopBar = () => {
  return (
    <div className="fixed items-center bg-[hsl(220,35%,12%)] border-b-[hsl(220,30%,20%)] box-border caret-transparent flex shrink-0 h-12 justify-between outline-[oklab(0.708_0_0_/_0.5)] w-full z-[999] p-2 border-t-[hsl(220,30%,20%)] border-x-[hsl(220,30%,20%)] border-b border-solid -top-12 inset-x-0">
      <a
        href="https://www.figma.com/community/make"
        className="items-center box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)] p-1 rounded-[5px]"
      >
        <img
          src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-1.svg"
          alt="Icon"
          className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
        />
      </a>
      <div className="items-center box-border caret-transparent gap-x-3 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-3">
        <a
          href="https://www.figma.com/report-abuse?reported_content=muse-curse-73362810.figma.site"
          title="Report"
          aria-label="Report"
          className="items-center box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)] border border-[hsl(220,30%,20%)] p-1 rounded-[5px] border-solid"
        >
          <img
            src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-2.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
          />
        </a>
        <a
          href="https://www.figma.com/community/file/1555396206649522698"
          className="text-white text-[11px] font-[450] items-center bg-[hsl(210,100%,50%)] box-border caret-transparent flex tracking-[0.055px] leading-4 min-h-8 outline-[oklab(0.708_0_0_/_0.5)] text-center pl-1 pr-3 py-1 rounded-[5px] font-inter"
        >
          <img
            src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-3.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
          />
          Remix with Figma Make
        </a>
      </div>
    </div>
  );
};
