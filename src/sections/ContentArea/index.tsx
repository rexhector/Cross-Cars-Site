import { useState, useMemo } from "react";
import { Sidebar } from "@/sections/ContentArea/components/Sidebar";
import { VehicleListings } from "@/sections/ContentArea/components/VehicleListings";
import { vehicles } from "@/data/vehicles";
import { FilterState } from "@/types/filters";

export const ContentArea = () => {
  const [filters, setFilters] = useState<FilterState>({
    vehicleTypes: [],
    priceRange: { min: 0, max: 200 },
    transmissions: [],
    fuelTypes: [],
  });

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      // Filter by vehicle type
      if (filters.vehicleTypes.length > 0 && !filters.vehicleTypes.includes(vehicle.category)) {
        return false;
      }

      // Filter by price range
      if (vehicle.price < filters.priceRange.min || vehicle.price > filters.priceRange.max) {
        return false;
      }

      // Filter by transmission
      if (filters.transmissions.length > 0 && !filters.transmissions.includes(vehicle.transmission)) {
        return false;
      }

      // Filter by fuel type
      if (filters.fuelTypes.length > 0 && !filters.fuelTypes.includes(vehicle.fuelType)) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full mx-auto px-4 py-8 md:max-w-screen-xl">
      <div className="box-border caret-transparent gap-x-8 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-8">
        <Sidebar filters={filters} onFilterChange={setFilters} />
        <VehicleListings filteredVehicles={filteredVehicles} />
      </div>
    </div>
  );
};
