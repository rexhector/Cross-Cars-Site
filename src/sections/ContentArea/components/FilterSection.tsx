import { FilterState } from "@/types/filters";

interface FilterSectionProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export const FilterSection = ({ filters, onFilterChange }: FilterSectionProps) => {
  const handleVehicleTypeChange = (type: string) => {
    const newTypes = filters.vehicleTypes.includes(type)
      ? filters.vehicleTypes.filter((t) => t !== type)
      : [...filters.vehicleTypes, type];
    onFilterChange({ ...filters, vehicleTypes: newTypes });
  };

  const handleTransmissionChange = (transmission: string) => {
    const newTransmissions = filters.transmissions.includes(transmission)
      ? filters.transmissions.filter((t) => t !== transmission)
      : [...filters.transmissions, transmission];
    onFilterChange({ ...filters, transmissions: newTransmissions });
  };

  const handleFuelTypeChange = (fuelType: string) => {
    const newFuelTypes = filters.fuelTypes.includes(fuelType)
      ? filters.fuelTypes.filter((f) => f !== fuelType)
      : [...filters.fuelTypes, fuelType];
    onFilterChange({ ...filters, fuelTypes: newFuelTypes });
  };

  const handlePriceChange = (value: number, type: "min" | "max") => {
    onFilterChange({
      ...filters,
      priceRange: {
        ...filters.priceRange,
        [type]: value,
      },
    });
  };

  const handleReset = () => {
    onFilterChange({
      vehicleTypes: [],
      priceRange: { min: 0, max: 200 },
      transmissions: [],
      fuelTypes: [],
    });
  };

  return (
    <div className="sticky bg-[hsl(220,35%,12%)] box-border caret-transparent h-fit outline-[oklab(0.708_0_0_/_0.5)] border p-6 rounded-[10px] border-solid border-[hsl(220,30%,20%)] top-24">
      <div className="items-center box-border caret-transparent flex justify-between outline-[oklab(0.708_0_0_/_0.5)] mb-6">
        <h3 className="box-border caret-transparent min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] md:min-h-[auto] md:min-w-[auto]">
          Filters
        </h3>
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-6">
          <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-[14px] outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 mb-3">
            Vehicle Type
          </label>
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
            {["Economy", "Compact", "Midsize", "SUV", "Luxury", "Van"].map((type) => (
              <div key={type} className="items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 mb-2">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={filters.vehicleTypes.includes(type)}
                  onClick={() => handleVehicleTypeChange(type)}
                  className={`${
                    filters.vehicleTypes.includes(type)
                      ? "bg-[hsl(210,100%,50%)] border-[hsl(210,100%,50%)]"
                      : "bg-[hsl(220,30%,18%)] border-[hsl(220,30%,20%)]"
                  } shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] caret-transparent flex items-center justify-center shrink-0 h-4 min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] w-4 border rounded-bl rounded-br rounded-tl rounded-tr border-solid md:min-h-[auto] md:min-w-[auto]`}
                >
                  {filters.vehicleTypes.includes(type) && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <label className="box-border caret-transparent block min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] md:min-h-[auto] md:min-w-[auto] cursor-pointer" onClick={() => handleVehicleTypeChange(type)}>
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-6">
          <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-[14px] outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 mb-3">
            Price per Day: ${filters.priceRange.min} - ${filters.priceRange.max}
          </label>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-[hsl(215,20%,65%)] mb-1 block">Min: ${filters.priceRange.min}</label>
              <input
                type="range"
                min="0"
                max="200"
                value={filters.priceRange.min}
                onChange={(e) => handlePriceChange(Number(e.target.value), "min")}
                className="w-full h-2 bg-[hsl(220,30%,18%)] rounded-lg appearance-none cursor-pointer accent-[hsl(210,100%,50%)]"
              />
            </div>
            <div>
              <label className="text-xs text-[hsl(215,20%,65%)] mb-1 block">Max: ${filters.priceRange.max}</label>
              <input
                type="range"
                min="0"
                max="200"
                value={filters.priceRange.max}
                onChange={(e) => handlePriceChange(Number(e.target.value), "max")}
                className="w-full h-2 bg-[hsl(220,30%,18%)] rounded-lg appearance-none cursor-pointer accent-[hsl(210,100%,50%)]"
              />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-6">
          <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-[14px] outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 mb-3">
            Transmission
          </label>
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
            {["Auto", "Manual"].map((transmission) => (
              <div key={transmission} className="items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 mb-2">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={filters.transmissions.includes(transmission)}
                  onClick={() => handleTransmissionChange(transmission)}
                  className={`${
                    filters.transmissions.includes(transmission)
                      ? "bg-[hsl(210,100%,50%)] border-[hsl(210,100%,50%)]"
                      : "bg-[hsl(220,30%,18%)] border-[hsl(220,30%,20%)]"
                  } shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] caret-transparent flex items-center justify-center shrink-0 h-4 min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] w-4 border rounded-bl rounded-br rounded-tl rounded-tr border-solid md:min-h-[auto] md:min-w-[auto]`}
                >
                  {filters.transmissions.includes(transmission) && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <label className="box-border caret-transparent block min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] md:min-h-[auto] md:min-w-[auto] cursor-pointer" onClick={() => handleTransmissionChange(transmission)}>
                  {transmission}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-6">
          <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-[14px] outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 mb-3">
            Fuel Type
          </label>
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
            {["gasoline", "diesel", "electric", "hybrid"].map((fuelType) => (
              <div key={fuelType} className="items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 mb-2">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={filters.fuelTypes.includes(fuelType)}
                  onClick={() => handleFuelTypeChange(fuelType)}
                  className={`${
                    filters.fuelTypes.includes(fuelType)
                      ? "bg-[hsl(210,100%,50%)] border-[hsl(210,100%,50%)]"
                      : "bg-[hsl(220,30%,18%)] border-[hsl(220,30%,20%)]"
                  } shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] caret-transparent flex items-center justify-center shrink-0 h-4 min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] w-4 border rounded-bl rounded-br rounded-tl rounded-tr border-solid md:min-h-[auto] md:min-w-[auto]`}
                >
                  {filters.fuelTypes.includes(fuelType) && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <label className="box-border caret-transparent block min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] md:min-h-[auto] md:min-w-[auto] cursor-pointer capitalize" onClick={() => handleFuelTypeChange(fuelType)}>
                  {fuelType}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button 
          onClick={handleReset}
          className="text-sm font-medium items-center bg-[hsl(220,30%,18%)] hover:bg-[hsl(220,30%,20%)] caret-transparent gap-x-2 inline-flex shrink-0 h-9 justify-center leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-nowrap w-full border px-4 py-2 rounded-lg border-solid border-[hsl(220,30%,20%)] transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};
