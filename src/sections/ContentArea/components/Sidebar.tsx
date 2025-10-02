import { FilterSection } from "@/sections/ContentArea/components/FilterSection";
import { FilterState } from "@/types/filters";

interface SidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export const Sidebar = ({ filters, onFilterChange }: SidebarProps) => {
  return (
    <aside className="box-border caret-transparent hidden shrink-0 min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] w-72 md:block md:min-h-[auto] md:min-w-[auto]">
      <FilterSection filters={filters} onFilterChange={onFilterChange} />
    </aside>
  );
};
