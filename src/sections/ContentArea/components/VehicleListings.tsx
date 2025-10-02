import { VehicleGrid } from "@/sections/ContentArea/components/VehicleGrid";
import { Vehicle } from "@/types/vehicle";

interface VehicleListingsProps {
  filteredVehicles: Vehicle[];
}

export const VehicleListings = ({ filteredVehicles = [] }: VehicleListingsProps) => {
  return (
    <div className="box-border caret-transparent basis-[0%] grow outline-[oklab(0.708_0_0_/_0.5)]">
      <div className="items-center box-border caret-transparent flex justify-between outline-[oklab(0.708_0_0_/_0.5)] mb-6">
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
          <h2 className="text-xl font-medium box-border caret-transparent leading-[30px] outline-[oklab(0.708_0_0_/_0.5)] mb-1">
            Available Vehicles
          </h2>
          <p className="text-[hsl(215,20%,65%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
            {filteredVehicles.length} {filteredVehicles.length === 1 ? 'car' : 'cars'} available
          </p>
        </div>
        <button
          type="button"
          className="text-sm font-medium items-center bg-[hsl(220,35%,12%)] caret-transparent gap-x-2 flex shrink-0 h-9 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-nowrap border px-3 py-2 rounded-lg border-solid border-[hsl(220,30%,20%)] md:hidden md:min-h-0 md:min-w-0"
        >
          <img
            src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-5.svg"
            alt="Icon"
            className="box-border caret-transparent shrink-0 h-4 outline-[oklab(0.708_0_0_/_0.5)] text-nowrap w-4 mr-2"
          />
          Filters
        </button>
      </div>
      <VehicleGrid vehicles={filteredVehicles} />
    </div>
  );
};
